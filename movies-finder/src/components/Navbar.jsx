import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext' // Accede al contexto de autenticación
import '../styles/Navbar.css'

function Navbar() {
  const { user, logout } = useAuth() // Obtenemos el usuario y la función logout

  return (
    <nav className='navbar'>
      <h1 className='navbar-title'>Movies Finder</h1>
      <ul className='navbar-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        {user ? (
          <>
            {/* Mostrar saludo con el nombre del usuario */}
            <li>
              <Link to='/profile'>Hola, {user.name}</Link>
            </li>
            {/* Botón de logout */}
            <li>
              <button onClick={logout} className='logout-button'>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            {/* Mostrar Login y Register si no hay usuario */}
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
