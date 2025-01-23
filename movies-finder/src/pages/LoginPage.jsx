import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Logged in with:', { email, password })
    login()
    navigate('/profile')
  }

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className='login-form'>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            required
          />
        </div>
        <button type='submit' className='login-button'>
          Login
        </button>
      </form>
      <p className='register-link'>
        Don't have an account? <Link to='/register'>Register here</Link>
      </p>
    </div>
  )
}

export default LoginPage
