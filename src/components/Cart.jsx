import React from 'react';
import {increment, updateDoc, collection, doc, serverTimestamp, setDoc} from 'firebase/firestore' 
import {CartContext, useCartContext}  from './CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { db } from '../utils/firebaseConfig';


const Cart = () => {
    const cartData = useCartContext(CartContext);
    const createOrder = () => {

        let order = {
            buyer: {
                name: ' Leo Messi',
                email: 'q@q.q',
                phone: '124151512'
            },
            date: serverTimestamp(),
            items: cartData.cartList.map(item =>({
                id:item.id,
                price: item.price,
                brand: item.brand,
                quantity: item.quantity,
                model: item.model
            })),
            total: cartData.totalPrice()
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef
        }

        createOrderInFirestore()
        .then(response => {
            alert('Order ID = ' + response.id)


            cartData.cartList.forEach(async(item) => {
                const itemRef = doc(db, "products", item.id)
                await updateDoc(itemRef,{
                    stock: increment(-item.quantity)
                });
            })
            cartData.clear()
        })
            
        .catch(err => console.log(err))
    }

    if (cartData.cartList.length === 0) {
        return (
            <div className='no_items'>
                <img src="https://www.kindpng.com/picc/m/177-1771572_clear-shopping-cart-icon-png-download-laundry-icons.png" alt="empty cart"></img>
                <p>Tu carrito está vacío!</p>
                <Link to={'/'} className='buyItem-bt'>Vamos a llenarlo!</Link>
            </div>
        );
    }else{
        return (
            <div className='cart_father'>
                <div className='principal_container'>
                    <div className='titles_cart'>
                        <span className='prod_title'>PRODUCTO</span>
                            <div className='rest_title'>
                                <span>CANTIDAD</span>
                                <span>PRECIO</span>
                                <span>SUBTOTAL</span>
                            </div>
                        </div>
                        {
                            cartData.cartList.map(product => <CartItem key={product.id} product={product} /> )
                        }
                </div>
                <div className='totals_container'>
                    <div className='del_disc_taxes'>

                        <div className='del_disc_titles'>
                            <span>Descuento:</span>
                            <span>Envío:</span>
                            <span>Total:</span>
                        </div>

                        <div className='del_disc_values'>
                            <span>$0</span>
                            <span>$0</span>
                            <span> ${cartData.totalPrice()}</span>
                        </div>

                    </div>
                    <button  onClick={createOrder}> Finalizar Compra</button>
                </div>
            </div>
                )
    }
}

export default Cart;