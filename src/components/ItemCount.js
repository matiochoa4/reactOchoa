import React, {useState} from 'react';

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        sumaStock:() => {
            if (stock === 0){
                alert('No hay mas unidades en stock :(')
            } else {
                setUnidades(unidades + 1)
                setStock(stock - 1)
            }
        },
        restaStock:() => {
            if (unidades === 0){
                alert('No se puede seleccionar una cantidad menor a 0 :(')
            } else {
                setUnidades(unidades - 1)
                setStock(stock + 1)
            }
        }
    }

    return (
        <div className="ItemCount">
            <div className="button-ItemCount">
                <button onClick={handleStock.restaStock}>-</button>
                <p>{unidades}</p>
                <button onClick={handleStock.sumaStock}>+</button>
            </div>
            <div>
                <p>Disponible: {stock}</p>
            </div>
            <div>
                <button onClick={ () => props.onAdd ({unidades})} className='btn btn-outline-dark'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount