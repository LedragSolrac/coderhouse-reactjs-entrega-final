import "./App.css"
import React from "react";
import "bulma/css/bulma.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js/ItemDetailContainer";
import CartProvider from "./context/CartContext";

import Cart from './components/Cart/Cart.js'

import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <div className="background">
            <BrowserRouter>
                <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/checkout' element={<Checkout />}/>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;