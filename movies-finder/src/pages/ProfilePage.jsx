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
      <section aria-labelledby="favorites-title">
        <h1 id="favorites-title">Favorites</h1>
        {favorites.length === 0 ? (
          <p>
            You have no favorite movies yet.{' '}
            <Link to='/search'>Search movies</Link>.
          </p>
        ) : (
          <div className='favorites-grid'>
            {favorites.map((movie) => (
              <article key={movie.id} className='movie-item'>
                <Link to={`/movie/${movie.id}`} aria-label={`View details of ${movie.title}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`Poster of ${movie.title}`}
                  />
                  <h3>{movie.title}</h3>
                </Link>
                <button
                  onClick={() => removeFavorite(movie.id)}
                  className='remove-button'
                  aria-label={`Remove ${movie.title} from favorites`}
                >
                  Remove from Favorites
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="watch-later-title">
        <h1 id="watch-later-title">Watch Later</h1>
        {watchLater.length === 0 ? (
          <p>
            You have no movies in Watch Later yet.{' '}
            <Link to='/search'>Search movies</Link>.
          </p>
        ) : (
          <div className='watch-later-grid'>
            {watchLater.map((movie) => (
              <article key={movie.id} className='movie-item'>
                <Link to={`/movie/${movie.id}`} aria-label={`View details of ${movie.title}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`Poster of ${movie.title}`}
                  />
                  <h3>{movie.title}</h3>
                </Link>
                <button
                  onClick={() => removeWatchLater(movie.id)}
                  className='remove-button'
                  aria-label={`Remove ${movie.title} from Watch Later`}
                >
                  Remove from Watch Later
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default ProfilePage