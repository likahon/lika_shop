import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const cantItemsContext = useContext(CartContext);
  /* console.log(cantItemsContext.calcItemsQty()); */

  return (
    <div className="cart_icon">
        <IoCartOutline />
        <span>{cantItemsContext}</span>

    </div>
  )
}

export default CartWidget;