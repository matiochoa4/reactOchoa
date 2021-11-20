import React, {useState} from 'react'

const Context = React.createContext()

const CartFunction = ({children}) => {

    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const onAdd = (producto, cantidad) => {
        const existe = cart.find(item=>item.id===producto.id) 
        if (!existe) {
            setCart([...cart, {pictureUrl: producto.pictureUrl, id:producto.id, description: producto.description, category:producto.category, title:producto.title, price:producto.price, cantidad:cantidad, subtotal:(producto.price*cantidad)}])
            setTotal(total+(producto.price*cantidad))
            setUnidades(unidades + 1)
            setCantidadTotal(cantidadTotal+cantidad)
        } else {
            const cartAuxiliar = cart.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=(producto.price*cantidad)
                }
                return item
            })
            setCart(cartAuxiliar)
            setTotal(total+(producto.price*cantidad))
            setCantidadTotal(cantidadTotal+cantidad)
        } 
    } 

    return <Context.Provider value={{cart, unidades, total, cantidadTotal, onAdd}}>
        {children}
    </Context.Provider>

}

export {CartFunction, Context}