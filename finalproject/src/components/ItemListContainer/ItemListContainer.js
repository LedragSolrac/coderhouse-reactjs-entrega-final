import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/app";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {

        if( categoryId ){
            setLoading(true);

            const collectionRef = categoryId 
            ? query(collection(db, 'items'), where('category', '==', categoryId))
            : collection(db, 'items');
    
            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc => {
                        const data = doc.data()
                        return { id: doc.id, ...data}
                    })
                    setProducts(productsAdapted);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            setLoading(true);
    
            const collectionRef = categoryId 
            ? query(collection(db, 'items'), where('id', '==', categoryId))
            : collection(db, 'items');
    
            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc => {
                        const data = doc.data()
                        return { id: doc.id, ...data}
                    })
                    setProducts(productsAdapted);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [categoryId])
    
    return (       
        <div>
            <div className=" columns is-flex is-justify-content-center">
                <h1 className="column is-12">{greeting}</h1>
            </div>
            <div>
                <ItemList products={products}/>
            </div>
        </div>

    )
}

export default ItemListContainer;