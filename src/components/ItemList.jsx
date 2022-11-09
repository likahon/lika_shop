const ItemList = (props) => {
    /* props = {
        text: ""
    } */
    return (
      <div className="products-container">
        <div className="product-image">
          <img src={props.pictureUrl} alt="Product image" />
        </div>
        <div className="product-info">
          <span className="product-title">{props.title}</span>
          {/* <p>{props.description}</p>
          <p>Stock: {props.stock}</p> */}
          <h5>${props.price}</h5>
        </div>
          <button className="buyItem-bt" onClick={props.buyItem}>SUMAR AL CARRITO</button>
    </div>
    )
  }
  
  export default ItemList;