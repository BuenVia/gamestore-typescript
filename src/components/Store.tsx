import React, { useState } from "react";
import BasketItem from "./BasketItem"
import Header from "./Header"
import StoreItem from "./StoreItem"
import { ProductItemProps } from '../productData'

interface StoreProps {
    products: ProductItemProps[],
    basketListItems: ProductItemProps[]
    onAdd: (products: ProductItemProps) => void
}

const Store: React.FC<StoreProps> = (props) => {

    const listSubmitHandler = (product: ProductItemProps) => {
        props.onAdd(product)
    }

    return (
        
        <div className="store__list-container">
            <Header />
            <div className="store__item-container">
                {props.products.map(product => {
                    return <StoreItem key={product.id} product={product} addItem={listSubmitHandler} basketListItems={props.basketListItems} />
                })}
            </div>
        </div>
    )
}

export default Store