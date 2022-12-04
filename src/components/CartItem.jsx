import React from "react";
import { useCartContext } from "./CartContext";
import { IoCloseCircleOutline } from "react-icons/io5";


const CartItem = ( {product} ) => {
const { removeItem } = useCartContext();

    return (
            <div className="cart_card">
                <IoCloseCircleOutline className="delete_icon" src={"public/img/delete_icon.png"} alt="" onClick={() => removeItem(product.id)}/>
                <img className="img" src={product.pictureUrl} alt="img" />
                <div className="cart_card_info">
                    <span className="brand_title">{product.brand} {product.model}</span>
                    <div className="rest_prod_title">
                        <span>{product.quantity} </span>
                        <span>${product.price} </span>
                        <span>${product.quantity * product.price} </span>
                    </div>
                </div>
            </div>
    )
}

export default CartItem 
