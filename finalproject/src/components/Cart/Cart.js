import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <div>
                <div className='m-4 is-flex is-justify-content-center is-flex-direction-column is-align-content-center is-align-items-center'>
                    <span className='title is-3 has-text-white'> Carrito </span>
                </div>
                <div className='m-4 is-flex-direction-column is-justify-content-center is-align-content-center is-align-items-center box box-color'>
                    <p >No hay elementos en el carrito!</p>
                    <Link to='/'>Volver a la tienda</Link>
                </div>
            </div>
        );
    }

    return (
        <div className='m-4'>
            <div className='m-4 is-flex is-justify-content-center is-flex-direction-column is-align-content-center is-align-items-center'>
                <span className='title is-3 has-text-white'> Carrito </span>
            </div>
            {
                <div className="m-2 is-flex is-justify-content-center">
                    {cart.map(prod => <ItemCart key={prod.id}{...prod} />)}
                </div>
            }
            <div className='m-4 is-flex is-justify-content-center'>
                <span className='box box-color'>
                    Total: ${totalPrice}
                </span>
            </div>
            <div className='m-2 is-flex is-justify-content-center'>
                <Link to='/checkout' className='column is-2 is-flex is-justify-content-center button is-outlined'>Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;