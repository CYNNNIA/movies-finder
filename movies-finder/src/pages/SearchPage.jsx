import React, { useState } from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { Link } from 'react-router-dom'
import '../styles/SearchPage.css'

function SearchPage() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1) 
  const totalPages = 10 
  const handleSearch = async (e, page = 1) => {
    e.preventDefault()
    setCurrentPage(page) 

    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
          page
        }
      })
      setMovies(response.data.results)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div className='search-page'>
      <h1>Search Movies</h1>
      <form onSubmit={(e) => handleSearch(e, 1)} className='search-form'>
        <input
          type='text'
          placeholder='Search for a movie...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {movies.length > 0 ? (
        <>
          <div className='movies-grid'>
            {movies.map((movie) => (
              <div key={movie.id} className='movie-item'>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className='movie-image'
                  />
                  <h3 className='movie-title'>{movie.title}</h3>
                </Link>
                <p className='movie-release-date'>
                  Release Date: {movie.release_date}
                </p>
              </div>
            ))}
          </div>
          {/* Barra de paginación */}
          <div className='pagination'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => handleSearch(new Event('submit'), index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>No results found. Try searching for a movie!</p>
      )}
    </div>
  )
}

export default SearchPage
