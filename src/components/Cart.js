import React, {useContext} from 'react'
import {Context} from './CartContext'

const Cart = () =>{
    const {cart, total} = useContext(Context)

    return (
        <p>El total es de ${total}</p>
    )
}

export default Cart