import React, {useEffect, useState} from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import db from '../firebase/firebase'
import { collection, query, where, getDocs} from 'firebase/firestore'

const ItemListContainer = (props) => { 
    const [productos, setProductos] = useState([]);
    const [loader, setLoader] = useState([]);

    const { catId } = useParams();

    useEffect(() => {
     setLoader(true);

     const myItems = catId ? query (collection(db, 'productos'), where('category', '==', catId)) : collection(db, 'productos');
     getDocs(myItems).then((res) => {
        const results = res.docs.map((doc) => {
           return {...doc.data (), id: doc.id};
        });
        setProductos(results);
     })
     .finally(() => setLoader(false));
 }, [catId]);

 return loader ? (
    <h2>CARGANDO...</h2>
 ) : (
    <>
    <ItemList productos={productos} />
    </>
 )}

export default ItemListContainer 