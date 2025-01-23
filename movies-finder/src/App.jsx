import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import FavoritesPage from './pages/FavoritesPage'
import ProfilePage from './pages/ProfilePage' // Importar la página de perfil

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '5rem', padding: '1rem' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />{' '}
          {/* Ruta para Favorites */}
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
