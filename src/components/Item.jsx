
import { Link } from "react-router-dom";

const Item = (props) => {
    /* props = {
        text: ""
    } */
    return (
      <div className="products-container">
        <div className="product-image">
          <img src={props.pictureUrl} alt="Product" />
        </div>
        <div className="product-info">
          <span className="product-title">{props.title}</span>
          {/* <p>{props.description}</p>
          <p>Stock: {props.stock}</p> */}
          <p>Stock: {props.stock}</p> 
          <h5>${props.price}</h5>
        </div>
        <div className="list-bts">
          <button className="buyItem-bt" onClick={props.buyItem}>SUMAR AL CARRITO</button>
          <Link className="detailsItem-bt" to={`/item/${props.id}`}>Detalles</Link>
        </div>
    </div>
    )
  }
  
  export default Item;