

function ProductCard({ drums, addItemToCart, notify }) {

    return (
        <div className="product-list">
            {drums.map((product) => (
                <div className="item" key={product.id}>
                    <a href="">
                        <img src={product.image} alt="" />
                    </a>
                    <h2>{product.name}</h2>
                    <div>$ {product.price}</div>
                    <button 
                        className="add-cart" 
                        onClick={() => {
                            addItemToCart(product)
                            notify()
                        }}
                    >
                        Add To Cart
                    </button>
                </div>
                
            ))}
        </div>
    )
}

export default ProductCard