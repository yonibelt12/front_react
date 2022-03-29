import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <header className='Header' id='header' role="banner">
        <div className="container">
            <nav>
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Login Hacedor</a></li>
                    <li><a href="#">Login Cliente</a></li>
                    <li><a href="#">Lista de Servicios</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;