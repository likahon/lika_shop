import React from "react";
import { useCartContext } from "./CartContext";



const CartItem = ( {product} ) => {
const { removeProduct } = useCartContext();

    return (
            <div className="cart_card">
                <img className="img" src={product.pictureUrl} alt="img" />
                <div>
                    <p>Titulo: {product.brand} {product.model}</p>
                    <p>Cantidad: {product.quantity} </p>
                    <p>Valor por unidad: ${product.price} </p>
                    <p>Subtotal: ${product.quantity * product.price} </p>
                    <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
    )
}

export default CartItem 
