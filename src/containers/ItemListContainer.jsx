import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import productsArray from "../utils/productsArray";
import ProductsPromise from "../utils/ProductsPromise";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])

    const buyItem = (stock) => {
        /* let newArray = datos.filter(item => item.id != id) */
        let newArray = datos.filter(item => item.stock--)
        setDatos(newArray)
    }

    useEffect(() => {
        ProductsPromise(2000, productsArray)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    })
    
    return (
      <>
      {
        datos.map(item => (

            <ItemList 
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                stock={item.stock}
                pictureUrl={item.pictureUrl}
                idCategory={item.idCategory}
                buyItem={() => buyItem(item.stock)}
            />

        ))
      }
      </>
    )
  }
  
  export default ItemListContainer;