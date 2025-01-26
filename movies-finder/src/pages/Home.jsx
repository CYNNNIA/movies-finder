import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY }
        })
        setRecommendations(response.data.results)
      } catch (error) {
        console.error('Error fetching recommendations:', error)
      }
    }

    fetchRecommendations()
  }, [])

  return (
    <div className='home-container'>
      <h1>Welcome to Movies Finder</h1>
      <p>Discover your next favorite movie!</p>

      <div className='recommendations-section'>
        <h2>Recommended Movies</h2>
        {recommendations.length > 0 ? (
          <div className='recommendations-grid'>
            {recommendations.slice(0, 10).map((movie) => (
              <div key={movie.id} className='movie-item'>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className='movie-image'
                  />
                  <h3 className='movie-title'>{movie.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading recommendations...</p>
        )}
      </div>
    </div>
  )
}

export default Home
