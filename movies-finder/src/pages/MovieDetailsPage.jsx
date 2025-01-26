import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useFavorites } from '../context/FavoritesContext'
import { useWatchLater } from '../context/WatchLaterContext'
import { API_KEY, BASE_URL } from '../config'
import '../styles/MovieDetailsPage.css'

function MovieDetailsPage() {
  const { id } = useParams() // Captura el ID de la película desde la URL
  const [movie, setMovie] = useState(null)

  // Contextos de favoritos y watch later
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { watchLater, addWatchLater, removeWatchLater } = useWatchLater()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY
          }
        })
        setMovie(response.data) // Guarda los detalles de la película
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }

    fetchMovieDetails()
  }, [id])

  // Verificar si la película ya está en Favoritos y Watch Later
  const isInFavorites = favorites.some((item) => item.id === movie?.id)
  const isInWatchLater = watchLater.some((item) => item.id === movie?.id)

  const handleFavoritesToggle = () => {
    if (isInFavorites) {
      removeFavorite(movie.id) // Elimina la película de Favoritos
    } else {
      addFavorite(movie) // Añade la película a Favoritos
    }
  }

  const handleWatchLaterToggle = () => {
    if (isInWatchLater) {
      removeWatchLater(movie.id) // Elimina la película de Watch Later
    } else {
      addWatchLater(movie) // Añade la película a Watch Later
    }
  }

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <div className='movie-details'>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>

      {/* Botones para añadir/eliminar de Favoritos y Watch Later */}
      <div className='buttons-container'>
        <button
          onClick={handleFavoritesToggle}
          className={`favorites-button ${isInFavorites ? 'remove' : 'add'}`}
        >
          {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>

        <button
          onClick={handleWatchLaterToggle}
          className={`watch-later-button ${isInWatchLater ? 'remove' : 'add'}`}
        >
          {isInWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
        </button>
      </div>
    </div>
  )
}

export default MovieDetailsPage
