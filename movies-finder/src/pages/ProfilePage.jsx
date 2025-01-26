import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useWatchLater } from '../context/WatchLaterContext'
import '../styles/ProfilePage.css'

function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }

  const { favorites, removeFavorite } = useFavorites() // Función para eliminar de favoritos
  const { watchLater, removeFromWatchLater } = useWatchLater() // Función para eliminar de Watch Later

  return (
    <div className='profile-container'>
      <h1>My Profile</h1>
      <div className='profile-card'>
        <div className='profile-info'>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Favorites Section */}
      <div className='favorites-section'>
        <h2>Your Favorites</h2>
        {favorites.length > 0 ? (
          <div className='favorites-grid'>
            {favorites.map((movie) => (
              <div key={movie.id} className='movie-item'>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className='movie-image'
                />
                <h3>{movie.title}</h3>
                <button
                  className='remove-button'
                  onClick={() => removeFavorite(movie.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>You have no favorite movies yet.</p>
        )}
      </div>

      {/* Watch Later Section */}
      <div className='watch-later-section'>
        <h2>Watch Later</h2>
        {watchLater.length > 0 ? (
          <div className='watch-later-grid'>
            {watchLater.map((movie) => (
              <div key={movie.id} className='movie-item'>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className='movie-image'
                />
                <h3>{movie.title}</h3>
                <button
                  className='remove-button'
                  onClick={() => removeFromWatchLater(movie.id)}
                >
                  Remove from Watch Later
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Your Watch Later list is empty.</p>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
