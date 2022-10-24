import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer text='Bienvenidos a mi tienda!.' />
    {/* <ItemListContainer text='Texto2' />
    <ItemListContainer text='Texto3' /> */}
    </>
  )
}

export default App;