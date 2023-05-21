import React, { useState, useEffect } from "react";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Store from "./components/Store";
import Basket from "./components/Basket";
import "./sass/app.scss";

import { productData, ProductItemProps } from './productData'


const App: React.FC = () => {

    const [showCheckout, setShowCheckout] = useState(false)
    const [basketList, setBasketList] = useState<ProductItemProps[]>([])
    const [basketTotal, setBasketTotal] = useState(0)

    const handleAdd = (product: ProductItemProps) => {
        setBasketList(prevVals => {
            return [...prevVals, product]
        })
        setBasketTotal(prevVal => {
            return prevVal + product.price
        })
    }
    
    const handleDel = (product: ProductItemProps) => {
        setBasketList(prevVals => {
            return prevVals.filter((id) => product !== id)
        })
        setBasketTotal(prevVal => {
            return prevVal - product.price
        })
    }

    const handleShowCheckout = () => {
        setShowCheckout(value => !value)
    }

    return (
        <div className="App">
            {showCheckout ? 
            <Checkout basketListItems={basketList} total={basketTotal} onDel={handleDel} onShowStore={handleShowCheckout} /> :
            <div className="store__container">
                <Store products={productData} onAdd={handleAdd} basketListItems={basketList} />
                <Basket basketListItems={basketList} total={basketTotal} onDel={handleDel} onShowCheckout={handleShowCheckout} />
            </div> } 
        </div>
    );
}

export default App;
