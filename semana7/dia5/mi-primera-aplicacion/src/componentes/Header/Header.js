



import React from 'react'
import "./styles.css"


const Header = () => {
    return (
        <nav className ="cabecera">
            <h1>CodiBlog</h1>
            <div className="links">
            <a href="/">Inicio</a>
            <a href="/crear">Nueva entrada</a>
            <a href="/crear">Contacto</a>
            </div>
        </nav>
    )
}

export default Header
