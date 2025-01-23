import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext'
import { WatchLaterProvider } from './context/WatchLaterContext' // Nuevo contexto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <FavoritesProvider>
        <WatchLaterProvider>
          <App />
        </WatchLaterProvider>
      </FavoritesProvider>
    </AuthProvider>
  </StrictMode>
)
