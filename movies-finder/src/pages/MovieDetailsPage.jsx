import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { useFavorites } from '../context/FavoritesContext'
import { useWatchLater } from '../context/WatchLaterContext'
import '../styles/MovieDetailsPage.css'

function MovieDetailsPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { watchLater, addToWatchLater, removeFromWatchLater } = useWatchLater()

  const isInFavorites = favorites.some((fav) => fav.id === parseInt(id))
  const isInWatchLater = watchLater.some((movie) => movie.id === parseInt(id))

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: { api_key: API_KEY }
        })
        setMovie(response.data)
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }

    fetchMovieDetails()
  }, [id])

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

      {/* Botón de favoritos con clases dinámicas */}
      <button
        className={`favorite-button ${isInFavorites ? 'remove' : 'add'}`}
        onClick={() =>
          isInFavorites ? removeFavorite(movie.id) : addFavorite(movie)
        }
      >
        {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      {/* Botón de Watch Later con clases dinámicas */}
      <button
        className={`watch-later-button ${isInWatchLater ? 'remove' : 'add'}`}
        onClick={() =>
          isInWatchLater
            ? removeFromWatchLater(movie.id)
            : addToWatchLater(movie)
        }
      >
        {isInWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
      </button>
    </div>
  )
}

export default MovieDetailsPage
