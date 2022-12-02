import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../containers/ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [infoProd, setinfoProd] = useState([])
  const{ idItem } = useParams();
  
  useEffect(() => {
    firestoreFetchOne(idItem)
    .then(result => setinfoProd(result))
    .catch(err => console.log(err))
  }, [idItem]);


    
    return (
      <>
      <ItemDetail item={infoProd}/>
      </>
    )
  }
  
  export default ItemDetailContainer;