import React from "react";
import "../CartItem/styleCart.css"
import { useCartContext } from "../../context/CartContext";


const CartItem = ({product}) => {

    const {removeProduct} = useCartContext();

    return(
        <div className="cart-item-container">
            <img src={product.img}/>
            <div className="cart-item-specs">
            <h4>{product.titulo}</h4>
            <h4>Cantidad productos seleccionados: {product.quantity}</h4>
            <h4>Precio p/unidad: ${product.precio}</h4>
            <h3>Subtotal: ${product.quantity * product.precio}</h3>
            <i className="bi bi-trash-fill" style={{color:"red", cursor: "pointer"}} onClick={() => removeProduct(product.id)}></i>
            </div>
        </div>
    );
};

export default CartItem