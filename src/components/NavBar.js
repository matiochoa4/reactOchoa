import React from 'react';
import Logo from './CartWidget'

const Navbar = () => {
    return (
        <>
        <header style={{display: 'flex', justifyContent: 'center', width: '100vw', backgroundColor: 'black'}}>
            <nav style={{display: 'flex', justifyContent: 'center', color: 'white', fontSize: '1rem', margin: '10px', gap: '40px'}}>
                <h3><Logo /></h3>
                <h3 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}><a>MAJUMA</a></h3>
                <h3 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}><a>NOSOTROS</a></h3>
                <h3 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}><a>PRODUCTOS</a></h3>
                <h3 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}><a>CONTACTO</a></h3>
            </nav>
        </header>
        </>
    )
}

export default Navbar 
