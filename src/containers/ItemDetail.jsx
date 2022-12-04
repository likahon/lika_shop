import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../components/CartContext";
import ItemCount from "../components/ItemCount";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const {addItem} = useCartContext();


  const onAdd = (cant) => {
      alert("Vas a sumar " + cant + " items al carrito.");
      setItemCount(cant);
      addItem(item,cant);
  }

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
              {
                item.stock === 0
                ? <p>Sin Stock</p>
                : <p>Stock: {item.stock}</p>
              }
              <div className="buy-price-container">
                <h5 className="product-detail-price">${item.price}</h5>
                <div className='item_count_father'>
                  {
                    itemCount === 0
                  ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                  : <Link to='/cart' style={{ textDecoration: "none" }}><button className="buyItem-bt" variant="contained" color="secondary">Ir al carrito</button></Link>
                  }
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default ItemDetail;