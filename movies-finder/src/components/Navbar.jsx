import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Navbar.css'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className='navbar'>
      <h1 className='navbar-title'>
        <Link to='/'>Movies Finder</Link>
      </h1>
      <ul className='navbar-links'>
        <li>
          <Link to='/search'>Buscar</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to='/profile'>Hola, {user.name}</Link>
            </li>
            <li>
              <button onClick={logout} className='logout-button'>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
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
