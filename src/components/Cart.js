import React, {useContext} from 'react'
import {Context} from './CartContext'
import { Link } from 'react-router-dom'

const Cart = () =>{
    const {cart, cantidadTotal, total} = useContext(Context)
    
    if(cantidadTotal>=1){
        return(
            <>
            {cart.map((item) => 
            <div>
                <img src={item.pictureUrl}></img>
                <h4>Nombre: {item.title}</h4>
                <p>Categoría: {item.category}</p>
                <p>Descripción: {item.description}</p>
                <p>${item.price}</p>
                <button className='btn btn-outline-dark'>REMOVE</button>                
            </div>
        )}

        <h3>Estas comprando {cantidadTotal} unidades y el total es de ${total}</h3>
            </>
        )
    }else{
        return (
            <>
            <h2>El carrito de compras está vacío</h2>
            <Link to={`/`}><p className='btn btn-outline-dark'>Volver al inicio</p></Link>
            </>
    )
    }
}

export default Cart