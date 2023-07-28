import { Link } from "react-router-dom";

import React from "react";

const Item = ({id, name, img, price, stock}) => {

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
                    Precio: ${price}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className="card-footer is-flex is-justify-content-center">
                <Link to={`/item/${id}`} className="button is-dark is-flex is-justify-content-center" >Ver Detalles</Link>
            </footer>
        </div>
    )
}

export default Item;