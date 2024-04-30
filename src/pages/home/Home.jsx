import WelcomeBar from "../../components/WelcomeBar"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import ProductCard from "./ProductList";
import toast, { Toaster } from 'react-hot-toast';


function Home({ drums, cartItems, addItemToCart }) {

    const notify = () => toast('👍 Added to cart!')

    return (
        <>
            <WelcomeBar />
            <div className="container">
                <Toaster />
                <Navbar
                    cartItems={cartItems}
                />
                <ProductCard 
                    drums={drums} 
                    addItemToCart={addItemToCart}
                    notify={notify}
                />
            </div>
            <Footer />
        </>
    )
}

export default Home