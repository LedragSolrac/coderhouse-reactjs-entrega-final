import React, { useContext } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection, getDocs, query, where, writeBatch, documentId } from 'firebase/firestore';

import { db } from '../../services/firebase/firebaseConfig';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice , clearCart } = useCartContext();

    const createOrder = async ({ userName, phone, email, confirmedEmail }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    userName, phone, email, confirmedEmail
                },
                items: cart,
                total: totalPrice,
                date: Timestamp.fromDate(new Date())
            }           

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id)

            const itemsRef = collection(db, 'items')

            const itemsAddedFromFirestore = await getDocs(query(itemsRef), where(documentId(), 'in', ids))

            const { docs } = itemsAddedFromFirestore
        
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                console.log('stockDb: ', stockDb);
                console.log('Product added to cart: ', productAddedToCart);
                console.log('prodQuantity: ', prodQuantity);

                if (stockDb >= prodQuantity ) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else if (prodQuantity !== undefined){
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
                console.log('outOfStock: ', outOfStock);
            })
            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log('Precio total era: ', totalPrice);
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return <div className='m-4 is-flex is-justify-content-center is-flex-direction-column is-align-content-center is-align-items-center'>
                <h1 className='title is-3 has-text-white'>Se esta generando su orden...</h1>
        </div>
    }
    if(orderId){
        return <div className='m-4 is-flex is-justify-content-center is-flex-direction-column is-align-content-center is-align-items-center'>
            <h1 className='title is-3 has-text-white'>El id de su orden es: {orderId}</h1>
        </div>
    }

    return (
        <div className='m-4 is-flex is-justify-content-center is-flex-direction-column is-align-content-center is-align-items-center'>
            <h1 className='title is-3 has-text-white'>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>           
        </div>
    );
};

export default Checkout;