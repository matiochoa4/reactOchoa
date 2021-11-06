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
                    <a className='navbar-brand' href='#'><img className='size' src='../../../MAJUMABLANCO.png'></img></a>
                    </Link>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <Link to={`/category/Categoria 1`}>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current='page' href='#'>Categoria 1</a>
                            </li>
                            </Link>
                            <Link to={`/category/Categoria 2`}>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current='page' href='#'>Categoria 2</a>
                            </li>
                            </Link>
                            <Link to={`/category/Categoria 3`}>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current='page' href='#'>Categoria 3</a>
                            </li>
                            </Link>                            
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current='page' href='#'><CartWidget /></a>
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