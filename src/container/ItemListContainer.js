import React, {useEffect, useState} from 'react';
import ItemList from './ItemList'
import data from '../data/data'
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => { 
    const [productos, setProductos] = useState([]);
    const { catId } = useParams();

    console.log(catId);

    const promise = new Promise((resolve, reject) => {
       setTimeout(() => {
       const cantidadProd = 3;
       if (cantidadProd === 0) {
          reject({ err: "No hay nada que mostrar en el listado" });
       } else {
          resolve(data);
       }
    },2000);
    })
    useEffect(() => {
          promise.then((res) => {
            catId ? setProductos(res.filter((i) => i.category === catId)) : setProductos(res);
          })
          .catch((err) => {
             console.log(err);
          });
       }, [catId]);
       return (
          <div>
             <h1>{props.title}</h1> 
             <ItemList productos={productos} /> 
          </div>
    );
 };

export default ItemListContainer 