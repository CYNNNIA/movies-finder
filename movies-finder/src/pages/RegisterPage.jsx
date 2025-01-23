import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/RegisterPage.css'

function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    console.log('Registered with:', { name, email, password, profilePicture })
    navigate('/login')
  }

  return (
    <div className='register-container'>
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
        <div className='form-group'>
          <label htmlFor='profilePicture'>Profile Picture URL:</label>
          <input
            type='url'
            id='profilePicture'
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            placeholder='Enter your profile picture URL'
          />
        </div>
        <button type='submit' className='register-button'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
