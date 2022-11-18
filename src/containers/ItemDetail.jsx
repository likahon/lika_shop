const ItemDetail = ({ item }) => {
    /* props = {
        text: ""
    } */
    return (
      <div className="detail-product">
          <div className="principal-container">
            <div className="detail-product-image">
              <span className="img-brand-name">{item.brand}</span>
              <img src={item.pictureUrl} alt="Product" />
            </div>
            <div className="product-details">
              <div className="product-detail-brand-model">
                <span className="product-detail-brand">{item.brand}</span>
                <span className="product-detail-model">{item.model}</span>
              </div>
              <p className="product-detail-description">{item.description}</p>
              <p>Stock: {item.stock}</p>
              <div className="buy-price-container">
                <h5 className="product-detail-price">${item.price}</h5>
                <button className="buyItem-bt" onClick={item.buyItem}>SUMAR AL CARRITO</button>
              </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default ItemDetail;