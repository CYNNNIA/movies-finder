import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Navbar.css'

function Navbar() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='navbar'>
      <h1 className='navbar-title'>
        <Link to='/'>Movies Finder</Link>
      </h1>

      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to='/search' onClick={toggleMenu}>Buscar</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to='/profile' onClick={toggleMenu}>Hola, {user.name}</Link>
            </li>
            <li>
              <button onClick={() => { logout(); toggleMenu(); }} className='logout-button'>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login' onClick={toggleMenu}>Login</Link>
            </li>
            <li>
              <Link to='/register' onClick={toggleMenu}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar