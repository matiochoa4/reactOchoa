import React, {useState, useContext} from 'react';
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom';
import { Context } from '../components/CartContext'

const ItemDetail = ({ id, title, pictureUrl, price, stock, description }) => {

  const [compra, setCompra] = useState(false)
  const {onAdd} = useContext(Context)

  const agregar = (props) => {
    setCompra(true)
    onAdd({id, title, price}, props.unidades)
    alert(`Se han agregado ${props.unidades} al carrito`)
  }

  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
      <div className="card mb-3" style={{maxWidth: 1000}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={pictureUrl} className="img-fluid rounded-start" alt={title}></img>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">${price}</small></p>
                        {!compra ? <ItemCount stock={stock} onAdd={agregar} /> : <Link to='/cart'><button className='btn btn-outline-dark'>Finalizar Compra</button></Link>}
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default ItemDetail