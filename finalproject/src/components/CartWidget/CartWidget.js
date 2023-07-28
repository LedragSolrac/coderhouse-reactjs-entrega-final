import cart from "./assets/cart.png"
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const CartWidget = () => {
    const {totalProducts} = useCartContext();
    
    return (
        <div className="is-flex is-align-items-center">
            <div className="">
                <Link to="/cart">
                    <figure className="image is-64x64">
                        <img src={cart} alt="cart-widget"></img>
                    </figure>              
                </Link>
            </div>
            <p className="">{totalProducts() || ''}</p>
        </div>
    )
}

export default CartWidget;