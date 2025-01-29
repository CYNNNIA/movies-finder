import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { Link } from 'react-router-dom'
import '../styles/FavoritesPage.css'

function FavoritesPage() {
  const { favorites } = useFavorites()

  console.log('Favoritos actuales:', favorites)

  if (!favorites || favorites.length === 0) {
    return (
      <div className='favorites-container'>
        <h1>Your Favorite Movies</h1>
        <p>You have no favorite movies yet.</p>
      </div>
    )
  }

  return (
    <div className='favorites-container'>
      <h1>Your Favorite Movies</h1>
      <div className='favorites-grid'>
        {favorites.map((movie) => (
          <div key={movie.id} className='favorite-item'>
            <Link to={`/movie/${movie.id}`} className='favorite-link'>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className='favorite-image'
              />
              <h3 className='favorite-title'>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage
