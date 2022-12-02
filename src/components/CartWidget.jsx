import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const cantItemsContext = useContext(CartContext);

  return (
    <div className="cart_icon">
        <IoCartOutline />
        <span>{cantItemsContext.totalProducts() || ""}</span>

    </div>
  )
}

export default CartWidget;