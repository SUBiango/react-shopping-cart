import WelcomeBar from "../../components/WelcomeBar"
import Navbar from "../../components/Navbar"
import Title from "./CartTitle"
import CartItem from "./CartItem"

function Cart({ cartItems, setCartItems }) {
    return (
        <>
            <WelcomeBar />
            <div className="container">
               <Navbar cartItems={cartItems} /> 
               <Title />
                <CartItem
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            </div>
        </>
    )
}

export default Cart