import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return(
        <div className="is-flex is-justify-content-center">
            {products.map(prod => <Item key={prod.id}{...prod} />)}
        </div>
    )
}

export default ItemList;