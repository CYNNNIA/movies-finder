import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useFavorites } from '../context/FavoritesContext'
import { useWatchLater } from '../context/WatchLaterContext'
import { API_KEY, BASE_URL } from '../config'
import '../styles/MovieDetailsPage.css'

function MovieDetailsPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { watchLater, addWatchLater, removeWatchLater } = useWatchLater()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: { api_key: API_KEY }
        })
        setMovie(response.data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching movie details:', err)
        setError('Failed to load movie details.')
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [id])

  const isInFavorites = favorites.some((item) => item.id === movie?.id)
  const isInWatchLater = watchLater.some((item) => item.id === movie?.id)

  const handleFavoritesToggle = () => {
    isInFavorites ? removeFavorite(movie.id) : addFavorite(movie)
  }

  const handleWatchLaterToggle = () => {
    isInWatchLater ? removeWatchLater(movie.id) : addWatchLater(movie)
  }

  if (loading) return <p>Loading movie details...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='movie-details'>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`Poster of ${movie.title}`}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>

      <div className='buttons-container'>
        <button
          onClick={handleFavoritesToggle}
          className={`favorites-button ${isInFavorites ? 'remove' : 'add'}`}
          aria-label={isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>

        <button
          onClick={handleWatchLaterToggle}
          className={`watch-later-button ${isInWatchLater ? 'remove' : 'add'}`}
          aria-label={isInWatchLater ? 'Remove from watch later' : 'Add to watch later'}
        >
          {isInWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
        </button>
      </div>
    </div>
  )
}

export default MovieDetailsPage