import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { useFavorites } from '../context/FavoritesContext'
import '../styles/MovieDetailsPage.css'

function MovieDetailsPage() {
  const { id } = useParams() // Captura el ID de la película desde la URL
  const [movie, setMovie] = useState(null)

  // Accede al contexto de favoritos
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  // Verifica si la película ya está en favoritos
  const isFavorite = favorites.some((fav) => fav.id === Number(id))

  // Manejar el clic en el botón de favoritos
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(Number(id)) // Elimina la película de favoritos
    } else {
      addFavorite(movie) // Agrega la película a favoritos
    }
  }

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

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  )
}

export default MovieDetailsPage
