const ItemDetail = ({ item }) => {
    /* props = {
        text: ""
    } */
    return (
      <div className="detail-product">
          <span className="product-detail-title">{item.title}</span>
          <div className="principal-container">
            <div className="detail-product-image">
            <img src={item.pictureUrl} alt="Product" />
            </div>
            <div className="product-details">
            <p>{item.description}</p>
            <p>Stock: {item.stock}</p> 
            <h5>${item.price}</h5>
            </div>
        </div>
          <button className="buyItem-bt" onClick={item.buyItem}>SUMAR AL CARRITO</button>
    </div>
    )
  }
  
  export default ItemDetail;