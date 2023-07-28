import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
            <div className="columns">
                <p className="column is-12">   </p>
            </div>
            <div className="columns is-flex is-justify-content-center">
                <button className="button is-dark column is-1 is-flex is-justify-content-center" onClick={decrement}>-</button>
                <h4 className="column is-1 is-flex is-justify-content-center">{quantity}</h4>
                <button className="button is-dark column is-1 is-flex is-justify-content-center" onClick={increment}>+</button>
            </div>
            <div className="is-flex is-justify-content-center">
                <button className="button is-dark is-flex is-justify-content-center" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;