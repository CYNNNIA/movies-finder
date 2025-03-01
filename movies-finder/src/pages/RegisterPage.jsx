import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/RegisterPage.css'

function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    const userData = { name, email } 
    console.log('Registered with:', userData)
    navigate('/login')
  }

  return (
    <section className='register-container'>
      <h1>Register</h1>
      <form onSubmit={handleRegister} className='register-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
            required
          />
        </div>
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
        <button type='submit' className='register-button'>
          Register
        </button>
      </form>
    </section>
  )
}

export default RegisterPage