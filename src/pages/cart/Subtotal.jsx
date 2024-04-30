import { useEffect, useState } from "react"

function SubTotal({ cartItems }) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalSingleItem = cartItems.map(item => item.product.price * item.quantity)
        const subTotal = totalSingleItem.reduce((acc, curr) => acc + curr, 0)
        setTotal(subTotal)
    }, [cartItems])
    

    return (
        <div className="subtotal">
            <div><strong>Sub Total:</strong> $ {total}</div>
            <button className="btn">CHECK OUT</button>
        </div>
    )
}

export default SubTotal