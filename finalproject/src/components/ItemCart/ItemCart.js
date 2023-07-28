import React from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ category, description, id, img, name, price, quantity, stock }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="card block has-background-grey-light">
        <header className="card-header">
            <h2 className="card-header-title">
                {name}
            </h2>
        </header>
        <div className="card-image is-flex is-justify-content-center">
            <figure className="image is-128x128">
                <img src={img} alt={name}/>
            </figure>
        </div>
        <section className="card-content">
            <p>
                Cantidad: {quantity}
            </p>
            <p>
                Precio: ${price}
            </p>
            <p>
                Subototal: ${quantity * price}
            </p>
        </section>
        <footer className="card-footer is-flex is-justify-content-center">
            <button onClick={() => removeProduct(id)} className="button is-dark is-flex is-justify-content-center" >Eliminar Producto</button>
        </footer>
    </div>
        
    );
};

export default ItemCart;