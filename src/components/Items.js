import React from 'react';
import './Items.css'

function Items ({title, pictureUrl, description, precio}) {
    return (
        <div className='card text-center'>
            <img src={pictureUrl} alt='' className=''></img>
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text card-secondary'>{description}</p>
                <p className='card-text card-primary'>{precio}</p>
                <a href='#!' className='btn btn-outline-dark'>Agregar al Carrito</a>
            </div>
        </div>
    )
}

export default Items