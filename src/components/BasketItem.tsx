import { ProductItemProps } from "../productData"

interface BasketItemProps {
    details: ProductItemProps
    delItem: (product: ProductItemProps) => void
}

const BasketItem: React.FC<BasketItemProps> = (props) => {


    const delItemHanlder = () => {
        props.delItem(props.details)
    }

    return (
        <div className="item__container">
            <div className="item__details-container">
                <img src={props.details.image} alt="game" className="game__img" />
                <div className="details__container">
                    <p>{props.details.title}</p>
                    <p><img src="./assets/coins.png" alt="coins" className="coins__img" /> {props.details.price} GIL</p>
                </div>
            </div>
            <div className="item__delete">
                <img src="./assets/bin.png" alt="bin" className="bin__img" onClick={delItemHanlder} />
            </div>
        </div>
    )
}

export default BasketItem