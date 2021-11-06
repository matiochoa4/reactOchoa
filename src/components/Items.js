import React from 'react';
import './Items.css'
import { Link } from 'react-router-dom';

function Items ({id, category, title, pictureUrl, description, precio}) {
    return (
        <Link to={`/item/${id}`}>
        <div className={`card text-center ${category}-category`}>
            <img src={pictureUrl} alt={title} className=''></img>
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text card-secondary'>{category}</p>
                <p className='card-text card-secondary'>{description}</p>
                <p className='card-text card-primary'>${precio}</p>
                <a href='#!' className='btn btn-outline-dark'>Agregar al Carrito</a>
            </div>
        </div>
        </Link>
    )
}

export default Items

