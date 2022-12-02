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
            <>
                <p>No hay productos en el carrito</p>
                <Link to={'/'}> Comenzar a comprar</Link>
            </>
        );
    }else{
        return (
            <div className='cart_father'>
                {
                    cartData.cartList.map(product => <CartItem key={product.id} product={product} /> )
                }
                <p>
                    Total: {cartData.totalPrice()}
                </p>
                <button  onClick={createOrder}> Finalizar Compra</button>

            </div>
                )
    }
}

export default Cart;