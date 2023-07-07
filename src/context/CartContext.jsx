import React from "react";
import { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]) 

    const addProduct = (product, newQuantity) => {
        const {quantity = 0} = cart.find(prod => prod.id === product.id) || {};
        const newCart = cart.filter(prod => prod.id !== product.id);
        setCart([...newCart, {...product, quantity: quantity + newQuantity}])
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => {
        setCart([])
    } 

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    
    return(
    <CartContext.Provider value={{clearCart, 
    isInCart, removeProduct, addProduct, totalPrice, totalProducts, cart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider
