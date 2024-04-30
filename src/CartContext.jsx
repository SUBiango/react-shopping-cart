import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext()

export function useCartContext() {
    return useContext(CartContext)
}

export const AppProvider = ({ children }) => {
    const [productItem, setProductItem] = useState()

    const value = {
        
    }
}