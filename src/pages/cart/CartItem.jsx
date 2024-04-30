import React from "react"
import SubTotal from "./Subtotal"
import CartItemHeading from "./CartItemHeading"

function CartItem({ cartItems, setCartItems }) {

    return (
        <div className="cart-item-container">
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    <CartItemHeading />
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.product.id}>
                            <div className="item">
                                <a href="">
                                    <img src={item.product.image} alt={item.product.name} />
                                </a>
                                <h4>{item.product.name}</h4>
                            </div>
                            <div className="qty">
                                <span 
                                    className="minus"
                                    onClick={() => {
                                        setCartItems((prevCartItem) => {
                                            const updateCart = prevCartItem.map((prevItem) => 
                                            prevItem.product.id === item.product.id ? 
                                            {...prevItem, quantity: Math.max(item.quantity - 1, 0)} : prevItem
                                        ).filter(item => item.quantity > 0)
                                        return updateCart
                                        })
                                    }}
                                >-</span>
                                <span>{item.quantity}</span>
                                <span 
                                    className="plus"
                                    onClick={() => {
                                        setCartItems((prevCartItem) => {
                                            const updateCart = prevCartItem.map((prevItem) => 
                                            prevItem.product.id === item.product.id 
                                            ? {...prevItem, quantity: item.quantity + 1}
                                            : prevItem
                                        )
                                        return updateCart
                                        })
                                    }}
                                >+</span>
                            </div>
                            <div className="price">$ {item.product.price * item.quantity}</div>
                        </div>
                    ))}
                    <SubTotal
                        cartItems={cartItems}
                    />
                </div>
                )}
         </div>
    )
}

export default CartItem