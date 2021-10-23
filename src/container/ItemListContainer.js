import React, {useEffect, useState} from 'react';
import ItemList from './ItemList'
import fotos1 from '../components/pictures/fotos1.jpg'

const ItemListContainer = () => { 
    const [productList, setProductList] = useState([]);
    const miLista = [
       { id: 1, title: "PRODUCTO 1", description: "description", price: 500, pictureUrl:{fotos1} }, 
       { id: 2, title: "PRODUCTO 2", description: "description", price: 500, pictureUrl:{fotos1} },
       { id: 3, title: "PRODUCTO 3", description: "description", price: 500, pictureUrl:{fotos1} },
    ];
    const promise = new Promise((resolve, reject) => {
       setTimeout(() => {
       const productos = 3;
       if (productos === 0) {
          reject({ err: "No hay nada que mostrar en el listado" });
       } else {
          resolve(miLista);
       }
    },2000);
    })
    useEffect(() => {
          promise
          .then((result) => {
             console.log(result);
             setProductList(result);
          })
          .catch((err) => {
             console.log(err);
          });
       }, []);
       return (
          <div>
          <ItemList productList={productList} /> 
          </div>
    );
 };

export default ItemListContainer 