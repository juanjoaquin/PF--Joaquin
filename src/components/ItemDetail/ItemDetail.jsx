import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../ItemDetail/itemDetailStyle.css"

const ItemDetail = ({product}) => {

    const [cantidad, setCantidad] = useState(0);

    const [compraRealizada, setCompraRealizada] = useState(false)

    const {addProduct} = useCartContext();

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < product.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = (quantity) => {
        setCompraRealizada(true)
        addProduct(product, quantity)
    }


    return(
        <div>
                {product && 
                <div className="itemdetail-container">
                <img style={{width:"600px"}} src={product.img} />
                <div className="itemdetail-specs">
                <h2 className="itemdetail-titulo">{product.titulo}</h2>
                <p className="itemdetail-precio">Precio: ${product.precio}</p>
                <h5 className="itemdetail-talles">Talles disponibles: {product.talles}</h5>
                <p className="itemdetail-unidades">Unidades disponibles: {product.stock}</p>
                <h4 className="itemdetail-titulo-descripcion">Descripcion:</h4>
                <p className="itemdetail-descripcion">{product.descripcion}</p>
                <div className="item-carrito">
                    <button className="button-mas" onClick={handleSumar}>+</button>
                    <span>{cantidad}</span>
                    <button className="button-menos" onClick={handleRestar}>-</button>
                    <i className="bi bi-4-circle"></i>
                </div>
                {compraRealizada ? (<Link to="/cart"><button className="bn632-hover bn26">Finalizar compra</button></Link> ) : (
                <button className="btn" disabled={cantidad <= 0} onClick={() => handleAgregar(cantidad)}>
                Agregar al carrito</button>
)}
                </div>
                </div>}

</div>

)
}

export default ItemDetail