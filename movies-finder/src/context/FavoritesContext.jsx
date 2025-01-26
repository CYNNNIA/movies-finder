import React, { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (movie) => {
    setFavorites((prev) => [...prev, movie])
  }

  const removeFavorite = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId))
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)
