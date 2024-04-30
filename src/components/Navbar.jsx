
import { Link } from "react-router-dom"
import IconCart from "../assets/IconCart"

function Navbar({ cartItems }) {

    return (
        <header>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div className="icon-cart">
                <Link to="/cart"><IconCart className="text-red-700" width='48px' height='48px'/></Link>
                <span>{cartItems.length === 0 ? 0 : cartItems.reduce((acc, item) => {
                    return (
                        acc + item.quantity
                    )
                }, 0)}</span>
            </div>
        </header>
    )
}

export default Navbar