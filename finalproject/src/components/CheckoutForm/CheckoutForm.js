import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ onConfirm }) => {
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmedEmail, setConfirmedEmail] = useState('')

    const { cart, totalPrice } = useCartContext();

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            userName, phone, email, confirmedEmail
        }


            onConfirm(userData);
        

    }

    if (cart.length === 0) {
        return (
            <div>
                <div className='m-4 is-flex-direction-column is-justify-content-center is-align-content-center is-align-items-center box box-color'>
                    <p >No hay elementos en el carrito!</p>
                    <Link to='/'>Volver a la tienda</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            {
                <div className="m-4 is-flex is-justify-content-center ">
                    {cart.map(prod => <ItemCart key={prod.id}{...prod} />)}
                </div>
            }
            <div className='m-4 is-flex is-justify-content-center'>
                <span className='box box-color'>
                    Total: ${totalPrice}
                </span>
            </div>
            <form className='m-4 card has-background-grey-light is-flex is-justify-content-center is-flex-direction-column is-align-content-center is-align-items-center' onSubmit={handleConfirm}>
                <label className=''>
                    Nombre
                    <input
                        type='text'
                        value={userName}
                        onChange={({ target }) => setUserName(target.value)}
                    />
                </label>
                <label>
                    Telefono
                    <input
                        type='number'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label>
                    Confirmar Email
                    <input
                        type='email'
                        value={confirmedEmail}
                        onChange={({ target }) => setConfirmedEmail(target.value)}
                    />
                </label>
                <div>
                    <div>
                        {
                            email !== confirmedEmail & email !== undefined
                            ?
                            <span> Los Emails introducidos no coinciden!</span>
                            :
                            <button type='submit' >Crear Orden</button>
                        }                      
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;