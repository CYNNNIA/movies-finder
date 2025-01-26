import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext' // Accede al contexto de autenticación
import '../styles/LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth() // Obtén la función login
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = { name: 'John Doe', email } // Simula datos del usuario
    login(userData) // Llama a login con los datos del usuario
    navigate('/') // Redirige al Home después de iniciar sesión
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
    </div>
  )
}

export default LoginPage
