import React, { createContext, useContext, useState } from 'react'

const WatchLaterContext = createContext()

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([])

  const addWatchLater = (movie) => {
    setWatchLater((prev) => [...prev, movie])
  }

  const removeWatchLater = (movieId) => {
    setWatchLater((prev) => prev.filter((movie) => movie.id !== movieId))
  }

  return (
    <WatchLaterContext.Provider
      value={{ watchLater, addWatchLater, removeWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  )
}

export const useWatchLater = () => useContext(WatchLaterContext)
