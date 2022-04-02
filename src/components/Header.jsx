import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
    return (
        <header className='Header' id='header' role="banner">
        <div className="container">
            <nav>
                <ul>
                    <Link to={'/'}>
                    <li className="active"><a href="#">Home</a></li>
                    </Link>

                    <Link to={'/login'}>
                        <li><a href="#">Login</a></li>
                    </Link>
                    
                    <Link to={'/listado'}>
                        <li><a href="#">Lista de Servicios</a></li>
                    </Link>
                    
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;