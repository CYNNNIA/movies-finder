import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import NotFound from './pages/NotFound' // 💡 Importa el nuevo componente

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
          <Route path='*' element={<NotFound />} /> {/* ✅ Ruta para 404 */}
        </Routes>
      </div>
    </Router>
  )
}

export default App