import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Estado para el usuario autenticado

  const login = (userData) => {
    setUser(userData) // Almacena los datos del usuario al iniciar sesión
  }

  const logout = () => {
    setUser(null) // Borra el usuario al cerrar sesión
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
