import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'

const App = () => {
  return (
    <>

    <Navbar />

    <div className='general-container'>
    <ItemListContainer/>
    </div>
    
    </>
  )
}

export default App;