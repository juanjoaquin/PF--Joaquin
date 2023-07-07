import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import {collection, query, getDocs, where } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import "../ItemListContainer/itemlistStyle.css"

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { categoria } = useParams()

useEffect(() => {
    const getProducts = async () => {
    const queryCollection = collection(db, "products");

    if (categoria) {
        const queryFilter = query(queryCollection, where("categoria", "==", categoria));
        const querySnapshot = await getDocs(queryFilter);
        const filterByProducts = querySnapshot.docs.map((product) => ({
        id: product.id, ...product.data(),
        }));
        setProducts(filterByProducts);
    } else {
        const querySnapshot = await getDocs(queryCollection);
        const allProducts = querySnapshot.docs.map((product) => ({
        id: product.id, ...product.data(),
        }));
        setProducts(allProducts);
    }
    };

    getProducts();
}, [categoria]);

    return(
        <div>
        { <div className="items-card-container">
        {products ? (
            products.map((product) => {
            return (<div key={product.id}>
                <ItemList  product={product}/>
                </div>
            )})
        ) : null}
        </div> }
        
        </div>
    );
};

export default ItemListContainer;