import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Navbar.css'

function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className='navbar'>
      <div className='navbar-title'>
        <h1>Movies Finder</h1>
      </div>
      <ul className='navbar-list'>
        <li>
          <Link className='navbar-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='navbar-link' to='/search'>
            Search
          </Link>
        </li>
      </ul>
      <ul className='navbar-list'>
        {isAuthenticated && (
          <>
            <li>
              <Link className='navbar-link' to='/profile'>
                My Profile
              </Link>
            </li>
            <li>
              <button className='navbar-link' onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
        {!isAuthenticated && (
          <li>
            <Link className='navbar-link' to='/login'>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
