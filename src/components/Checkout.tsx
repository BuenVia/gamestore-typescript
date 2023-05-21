import { ProductItemProps } from "../productData"
import Header from "./Header"
import CheckoutItem from "./CheckoutItem"

interface CheckoutProps {
    basketListItems: ProductItemProps[]
    total: number
    onShowStore: () => void
    onDel: (product: ProductItemProps) => void
}

const Checkout: React.FC<CheckoutProps> = (props) => {

    const listDelHandler = (product: ProductItemProps) => {
        props.onDel(product)
    }

    return (
        <div className="checkout__area">
            <Header />
            <div className="checkout">
                <div className="checkout__container">
                    <button className="back__btn" onClick={props.onShowStore}>Go Back</button>
                    <div className="checkout__list">
                        {props.basketListItems.map(item => {
                            return <CheckoutItem details={item} delItem={listDelHandler}/>
                        })}
                    </div>
                    <div className="checkout__total">
                        <p>Total: &nbsp;&nbsp;&nbsp;&nbsp; <b>{props.total}</b> GIL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout