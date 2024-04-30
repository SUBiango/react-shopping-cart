import { Routes, Route } from 'react-router-dom'
import useProduct from './hooks/State'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import './App.css'


function App() {

  const [drums, cartItems, setCartItems, addItemToCart] = useProduct()

  return (
    <Routes>
      <Route path='/' 
        element={<Home 
          drums={drums} 
          cartItems={cartItems}
          addItemToCart={addItemToCart}
        />} 
      />
      <Route path='/cart' 
        element={<Cart 
          cartItems={cartItems} 
          setCartItems={setCartItems}
        />} 
      />
    </Routes>
  )
}

export default App
