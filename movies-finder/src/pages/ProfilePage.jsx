import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useWatchLater } from '../context/WatchLaterContext'
import '../styles/ProfilePage.css'

function ProfilePage() {
  const { favorites, removeFavorite } = useFavorites()
  const { watchLater, removeWatchLater } = useWatchLater()

  return (
    <div className='profile-container'>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>
          You have no favorite movies yet.{' '}
          <Link to='/search'>Search movies</Link>.
        </p>
      ) : (
        <div className='favorites-grid'>
          {favorites.map((movie) => (
            <div key={movie.id} className='movie-item'>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </Link>
              <button
                onClick={() => removeFavorite(movie.id)}
                className='remove-button'
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}

      <h1>Watch Later</h1>
      {watchLater.length === 0 ? (
        <p>
          You have no movies in Watch Later yet.{' '}
          <Link to='/search'>Search movies</Link>.
        </p>
      ) : (
        <div className='watch-later-grid'>
          {watchLater.map((movie) => (
            <div key={movie.id} className='movie-item'>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </Link>
              <button
                onClick={() => removeWatchLater(movie.id)}
                className='remove-button'
              >
                Remove from Watch Later
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProfilePage
