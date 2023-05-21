import { ProductItemProps } from "../productData"

interface CheckoutItemProps {
    details: ProductItemProps
    delItem: (product: ProductItemProps) => void
}

const CheckoutItem: React.FC<CheckoutItemProps> = (props) => {

    const delItemHanlder = () => {
        props.delItem(props.details)
    }

    return (
        <div className="list__item-container">
            <div className="list__details-container">
                <img src={props.details.image} alt="game" className="game__img" />
                <div className="list__item-info">
                    <p>{props.details.title}</p>
                    <p><img src="./assets/coins.png" alt="coins" className="coins__img" /> {props.details.price} GIL</p>
                </div>
            </div>
            <div className="list__delete">
                <p><img src="./assets/bin.png" alt="bin" onClick={delItemHanlder} className="bin__img" /></p>
            </div>
        </div>
    )
}

export default CheckoutItem