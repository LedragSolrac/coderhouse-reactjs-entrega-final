import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const {addProduct} = useCartContext();

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity);
        addProduct({id, name, img, category, description, price, stock}, quantity);

    }

    return (
        <div className="m-4 card block has-background-grey-light">
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
                Categoria: {category}
            </p>
            <p>
                Descripción: {description}
            </p>
            <p>
                Precio: ${price}
            </p>
        </section>
        <footer className="card-footer is-flex is-justify-content-center">
            {
                quantityAdded > 0 ?(
                    <Link className="m-4 button is-dark is-flex is-justify-content-center" to='/cart'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)}/>
                )
            }
            </footer>
    </div>

    )
}

export default ItemDetail;