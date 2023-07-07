import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebaseConfig";
import "../../firebase/firebaseConfig";
import CartItem from "../CartItem/CartItem";
import "../Cart/cart-estilo.css"
import MessageSuccess from "../MessageSuccess/MessageSucces";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, totalPrice} = useCartContext()

    const [purchaseID, setPurchaseID] = useState("");


    const formState = {
        name: "",
        apellido: "",
        email: "",
        repetirEmail: "",
        telefono: ""
    }

    const [values, setValues] = useState(formState)

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({...values, [name]: value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();

        if(values.email !== values.repetirEmail) {
            return alert("no")
        }
        const docRef = await addDoc(collection(db, "purchasesCollection"), {
            values,
        });
        setPurchaseID(docRef.id)
        setValues(formState);
    }

    if(cart.length === 0) {
        return(
            <div className="error-carrito-container">
                <div className="error-carrito-texto">
                <h1>Aún no contas con productos en el carrito...</h1>
                <h2>Volvé a nuestro inicio para comenzar tu búsqueda</h2>
                <p className="link-inicio"><Link to="/">Ir al inicio</Link></p>
                </div>
            </div>
        );
    }


    return(
    <div>
            {cart.map(product => <CartItem key={product.id} product={product} />)}
        <h2 className="cart-total">Total: ${totalPrice()}</h2>

        <h4 className="titulo-form">PARA TERMINAR LA COMPRA DEBE LLENAR EL FORMULARIO:</h4>
        <div className="form-container">
        <form className="form-cart" onSubmit={onSubmit}>
            <input 
            required
            type="text" 
            placeholder="Nombre" 
            name="name" 
            value={values.name} 
            onChange={handleChange}/>
            
            <input 
            required
            type="text" 
            placeholder="Apellido" 
            name="apellido" 
            value={values.apellido}
            onChange={handleChange}/>
            <input  
            required
            type="email" 
            placeholder="Email" 
            name="email" 
            value={values.email}
            onChange={handleChange}/>
            <input 
            required
            type="text" 
            placeholder="Repetir email" 
            name="repetirEmail" 
            value={values.repetirEmail}
            onChange={handleChange}/>
                            <input 
            type="number" 
            placeholder="Número de télefono" 
            name="telefono" 
            value={values.telefono}
            onChange={handleChange}/>

            <button className="submit-form" type="submit">Terminar compra</button>
        </form>
        {purchaseID && <MessageSuccess purchaseID={purchaseID}/>}

        </div>
    </div>
    ); 
};

export default Cart