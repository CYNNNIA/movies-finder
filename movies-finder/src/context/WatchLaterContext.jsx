import React, { createContext, useContext, useState, useEffect } from 'react'

const WatchLaterContext = createContext()

export const useWatchLater = () => useContext(WatchLaterContext)

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState(() => {
    // Cargar Watch Later desde localStorage al iniciar
    const storedWatchLater = localStorage.getItem('watchLater')
    return storedWatchLater ? JSON.parse(storedWatchLater) : []
  })

  useEffect(() => {
    // Guardar Watch Later en localStorage cada vez que cambien
    localStorage.setItem('watchLater', JSON.stringify(watchLater))
  }, [watchLater])

  const addToWatchLater = (movie) => {
    if (!watchLater.some((item) => item.id === movie.id)) {
      setWatchLater([...watchLater, movie])
    }
  }

  const removeFromWatchLater = (id) => {
    setWatchLater(watchLater.filter((movie) => movie.id !== id))
  }

  return (
    <WatchLaterContext.Provider
      value={{ watchLater, addToWatchLater, removeFromWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  )
}
