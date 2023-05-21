import React from "react";
import { ProductItemProps } from "../productData"
import BasketItem from "./BasketItem"

interface BasketProps {
    basketListItems: ProductItemProps[]
    total: number
    onDel: (product: ProductItemProps) => void
    onShowCheckout: () => void
}

const Basket: React.FC<BasketProps> = (props) => {

    const listDelHandler = (product: ProductItemProps) => {
        props.onDel(product)
    }

    return (
        <div className="store__basket-container">
            <h1>Basket</h1>
            <div className="basket__item-list">
                {props.basketListItems.map(item => {
                    return <BasketItem details={item} delItem={listDelHandler} />
                })}

            </div>
            <div className="bottom__container">
                <div className="basket__total-container">
                    <span>Total: </span>
                    <span><b>{props.total}</b> GIL</span>
                </div>
                <button 
                    className="continue__btn" 
                    onClick={props.onShowCheckout}
                    disabled={props.basketListItems.length > 0 ? false : true} 
                    style={{backgroundColor: props.basketListItems.length > 0 ? 'black' : 'grey'}}
                    >Continue
                </button>
            </div>
        </div>
    )
}

export default Basket