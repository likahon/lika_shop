import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import productsArray from "../utils/productsArray";
import ProductsPromise from "../utils/ProductsPromise";
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [datos, setDatos] = useState([])
  const { categoryId } = useParams();

  const buyItem = () => {
      /* let newArray = datos.filter(item => item.id != id) */
      let newArray = datos.filter(item => item.stock--)
      setDatos(newArray)
  }
console.log(datos)
  useEffect(() => {

    if (categoryId == undefined) {

      ProductsPromise(2000, productsArray)
          .then(response => setDatos(response))
          .catch(err => console.log(err))

    }else{

      ProductsPromise(2000, productsArray.filter(item => item.idCategory == categoryId))
          .then(response => setDatos(response))
          .catch(err => console.log(err))

    }
      
  }, [categoryId])
    
    return (
      <>
      <ItemList items={datos} buyItem={buyItem} />
      </>
    )
  }
  
  export default ItemListContainer;