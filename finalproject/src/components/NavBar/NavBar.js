import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
           <div className="columns has-background-grey-light">
                <div className="column is-12 is-flex is-justify-content-center">
                    <Link to={'/'}>
                        <h3 className="title is-1 "> Mothertech </h3>
                    </Link>
                </div>
            </div>
            <div className="columns is-flex align-items-center has-background-grey-light">
                <Link to={`/category/cpu`} className="column is-2 is-flex is-justify-content-center button is-dark is-outlined"> Procesadores </Link>
                <Link to={`/category/gpu`} className="column is-2 is-flex is-justify-content-center button is-dark is-outlined"> Placas de Video </Link>
                <Link to={`/category/motherboard`} className="column is-2 is-flex is-justify-content-center button is-dark is-outlined"> Placas Madre </Link>
                <Link to={`/category/powersupply`} className="column is-2 is-flex is-justify-content-center button is-dark is-outlined"> Fuentes </Link> 
                <div className="column is-2">
                </div> 
                <CartWidget className="column is-2" />
            </div>
        </nav>
    )
}

export default NavBar;