import React from 'react';
import Items from '../components/Items'

const ItemList = ({productos}) => {
    return (
        <div className='container'>
            <div className='row'>
                {
                    productos.map(producto => (
                        <div className='col-md-4' key={producto.id}>
                            <Items id={producto.id} title={producto.title} category={producto.category} pictureUrl={producto.pictureUrl} description={producto.description} precio={producto.price} />
                        </div>    
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList