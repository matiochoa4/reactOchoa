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
                            <Link to={`/category/Categoria 1`}>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'>Categoria 1</p>
                            </li>
                            </Link>
                            <Link to={`/category/Categoria 2`}>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'>Categoria 2</p>
                            </li>
                            </Link>
                            <Link to={`/category/Categoria 3`}>
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'>Categoria 3</p>
                            </li>
                            </Link>                            
                            <li className='nav-item'>
                                <p className='nav-link active' aria-current='page'><CartWidget /></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar