
import React from "react";
import { Link } from "react-router-dom";


const ItemList = ({product}) => {
    return(
        <div>
            <div className="wewe">
            <img className="img-products"  src={product.img}  />
            <div className="items-card-container-texto">
            <h4 className="titulo-card">{product.titulo}</h4>
            <p className="precio-card">${product.precio}</p>
            </div> 
            <div className="css-button-arrow--black">
            { <Link to={`/catalogo/${product.id}`}>Ver más</Link>  }
            </div>
            </div>
        </div>
    );
};

export default ItemList