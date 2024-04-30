import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import products from "../data/products";

function useProduct() {
    const [drums, setDrums] = useState(products)
    const [cartItems, setCartItems] = useLocalStorage('cartItems', [])

    const addItemToCart = (drumItem) => {
        const isItemInCart = cartItems.find((item) => item.product.id === drumItem.id)
        if (isItemInCart) {
            const updateCart = cartItems.map(item => 
                item.product.id === drumItem.id ? {
                ...item, quantity: item.quantity + 1} : item
            )
            setCartItems(updateCart)
        } else {
            setCartItems([...cartItems, {product: drumItem, quantity: 1} ])
        }
    }
    
    return [drums, cartItems, setCartItems, addItemToCart]
}

export default useProduct