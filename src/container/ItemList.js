import React from 'react';
import Items from '../components/Items'
import fotos1 from '../components/pictures/fotos1.jpg'

const itemList = [
    {
        id: 1,
        title: 'PRODUCTO 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum harum fugit sapiente dolorum unde odit explicabo, perspiciatis minima sed. Beatae officia nobis excepturi maiores. Amet!',
        price: 500,
        pictureUrl: fotos1
    },
    {
        id: 2,
        title: 'PRODUCTO 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum harum fugit sapiente dolorum unde odit explicabo, perspiciatis minima sed. Beatae officia nobis excepturi maiores. Amet!',
        price: 500,
        pictureUrl: fotos1
    },
    {
        id: 3,
        title: 'PRODUCTO 3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum harum fugit sapiente dolorum unde odit explicabo, perspiciatis minima sed. Beatae officia nobis excepturi maiores. Amet!',
        price: 500,
        pictureUrl: fotos1
    }
]


function ItemList () {
    return (
        <div className='container'>
            <div className='row'>
                {
                    itemList.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Items title={card.title} pictureUrl={card.pictureUrl} description={card.description} precio={card.price} />
                        </div>    
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList