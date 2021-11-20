import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const Navbar = () => {
   
    return (
        <>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link to={`/`}>
                    <p className='navbar-brand' href='#'><img className='size' src='../../../MAJUMABLANCO.png'></img></p>
                    </Link>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <Link to={`/category/A`}>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'>Categoria A</p>
                            </li>
                            </Link>
                            <Link to={`/category/B`}>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'>Categoria B</p>
                            </li>
                            </Link>
                            <Link to={`/category/C`}>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'>Categoria C</p>
                            </li>
                            </Link>                            
                            <Link to={`/category/D`}>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'>Categoria D</p>
                            </li>
                            </Link>
                            <Link to={`/cart`}>                            
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'><CartWidget /></p>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar