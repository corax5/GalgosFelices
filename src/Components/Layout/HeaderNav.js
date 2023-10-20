import React from 'react'
import { NavLink } from 'react-router-dom'



export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span><img src='/logo1-removebg-preview.png' alt='' id='logo'></img></span>
                <h1>Galgos Felices</h1>
            </div>
            <div className='router'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Adopta" className={({ isActive }) => isActive ? "active" : ""}>Adopta</NavLink>
                        </li>
                        <li>
                            <NavLink to="/¿ComoAyudar?" className={({ isActive }) => isActive ? "active" : ""}>¿Como Ayudar?</NavLink>
                        </li>
                        <li>
                            <NavLink to="/LaFundacion" className={({ isActive }) => isActive ? "active" : ""}>La Fundacion</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Adoptados" className={({ isActive }) => isActive ? "active" : ""}>Adoptados</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}