import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './components/CartContext';


const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar />

    <div className='general-container'>
    <CartContextProvider>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </CartContextProvider>

      </div>
    </BrowserRouter>


  )
}

export default App;