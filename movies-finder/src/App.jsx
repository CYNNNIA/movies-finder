import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '5rem', padding: '1rem' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
