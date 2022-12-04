import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const cantItemsContext = useContext(CartContext);

  if (cantItemsContext.totalProducts() == 0) {
    return (
      <div className="cart_icon">
          <IoCartOutline />
      </div>
    )
  }else{
    return (
      <div className="cart_icon">
          <IoCartOutline />
          <span className='notifCartItems'>{cantItemsContext.totalProducts() || ""}</span>
      </div>
    )
  }
}

export default CartWidget;