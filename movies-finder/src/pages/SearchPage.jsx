import React, { useState } from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { Link } from 'react-router-dom'
import '../styles/SearchPage.css'

function SearchPage() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query
        }
      })
      setMovies(response.data.results) // Guardar los resultados en el estado
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for a movie...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </Link>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
