import React, { useState, useEffect } from "react"
import { ProductItemProps } from "../productData"

interface StoreItemProps {
    product: ProductItemProps
    basketListItems: ProductItemProps[]
    addItem: (product: ProductItemProps) => void
}

const StoreItem: React.FC<StoreItemProps> = (props) => {

    const [disable, setDisable] = useState(false)

    const checkDisableHandler = () => {
        if (props.basketListItems.includes(props.product)) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }

    const showItemDetails = () => {
        props.addItem(props.product)
    }

    useEffect(() => {
        checkDisableHandler()
    }, [showItemDetails])

    return (    
            <div className="store__item">
                <img src={props.product.image} alt="game" className={disable ? "game__img disabled" : "game__img"} />
                <div className="details__container">
                    <h4 className={disable ? "disabled" : ""}>{props.product.title}</h4>
                    <p className={disable ? "disabled" : ""}>{props.product.description}</p>
                    <p className={disable ? "disabled" : ""}><img src="./assets/coins.png" alt="coins" className="coins__img"/> {props.product.price} GIL</p>
                    <button className={disable ? "disabled add__btn" : "add__btn"} onClick={showItemDetails} disabled={disable ? true : false}>Add to Basket</button>
                </div>
            </div>
    )
}

export default StoreItem