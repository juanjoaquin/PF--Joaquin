import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {getFirestore, doc, collection, getDoc } from 'firebase/firestore';
import "../../firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProducts] = useState({})
    
    const {detalle} = useParams()

    useEffect(() => {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, "products", detalle);
        getDoc(queryDoc)
            .then(res => setProducts({id: res.id, ...res.data()}))
    }, [detalle])

    return(
        <div>
            
            <div>
                <ItemDetail product={product}/>
            </div>
        </div>
    );
};

export default ItemDetailContainer