import React from "react";
import "../HomePage/homeStyle.css"
import { Link } from "react-router-dom";
import campera from "../../assets/images/campera.jpg"
import remera from "../../assets/images/remera.jpg"
import pantalon from "../../assets/images/pantalon.jpg"
import buzos from "../../assets/images/buzos.jpg"
import delivery from "../../assets/images/delivery.jpg"

const HomePage = () => {
    return(
        <div>
            <div className="back-titulo">
            <h1 className="back-h1">FINAL SHOP</h1>
            <h3 className="back-subtitulo">TIENDA DE ROPA ONLINE EXCLUSIVA PARA HOMBRES</h3>
            </div>
            <div className="catalogo-container">
                <h2 className="catalogo-texto"><Link to="/catalogo" >BUSCA EN NUESTRO CATALOGO</Link></h2>
            </div>
            <div className="busca-categorias">
            <h2 className="busca-categoria-titulo">BUSCA POR LA CATEGORIA QUE PREFIERAS</h2>
            <div className="busca-categorias-img">
                <Link className="camperas-img-texto" to="/categoria/campera">
                <h3 style={{color:"white"}}>Camperas</h3>
                </Link>
            <img className="campera-1" src={campera} alt="" />
            <Link className="camperas-img-texto-2" to="/categoria/remeras">
                <h3 style={{color:"white"}}>Remeras</h3>
                </Link>
            <img className="remera-2" src={remera} alt="" />
            <Link className="camperas-img-texto-3" to="/categoria/pantalones">
                <h3 style={{color:"white"}}>Pantalones</h3>
                </Link>
            <img className="pantalon-3" src={pantalon} alt="" />
            <Link className="camperas-img-texto-4" to="/categoria/buzos">
                <h3 style={{color:"white"}}>Buzos</h3>
                </Link>
            <img className="buzos-4" src={buzos} alt="" />
            </div>
            </div>
            <div className="delivery-container">
            <h1 className="delivery-titulo">ENVIOS GRATIS</h1>
            <h3 className="delivery-subtitulo">ENVIO GRATIS A TODO EL <br /> PAIS SIN IMPORTAR EL COSTO DEL PRODUCTO</h3>
            <img className="delivery" src={delivery} alt="" />
            </div>
        </div>
    );
};

export default HomePage