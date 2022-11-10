import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../containers/ItemDetail";
import productsArray from "../utils/productsArray";
import ProductsPromise from "../utils/ProductsPromise";

const ItemDetailContainer = () => {
  const [infoProd, setinfoProd] = useState([])
  const{ idItem } = useParams();

  useEffect(() => {
      ProductsPromise(2000, productsArray.find(item => item.id == idItem))
          .then(response => setinfoProd(response))
          .catch(err => console.log(err))
  })
    
    return (
      <>
      <ItemDetail item={infoProd}/>
      </>
    )
  }
  
  export default ItemDetailContainer;