import React, { createContext, useContext, useState } from 'react'

const WatchLaterContext = createContext()

export const useWatchLater = () => useContext(WatchLaterContext)

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([])

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
