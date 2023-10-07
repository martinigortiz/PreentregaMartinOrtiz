import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div>
            <header>
                <h1>JeepStam</h1>
                <nav>
                    <ul>
                        <li>Quienes somos</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                        <li>Ubicación</li>
                    </ul>
                </nav>
                <CartWidget/>
            </header>
        </div>
    )
}

export default NavBar