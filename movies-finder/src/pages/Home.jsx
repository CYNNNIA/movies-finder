import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL } from '../config'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const [recommendations, setRecommendations] = useState([])
  const [currentPage, setCurrentPage] = useState(1) 
  const totalPages = 10 

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY, page: currentPage } 
        })
        setRecommendations(response.data.results)
      } catch (error) {
        console.error('Error fetching recommendations:', error)
      }
    }

    fetchRecommendations()
  }, [currentPage]) 

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='home-container'>
      <h1>Welcome to Movies Finder</h1>
      <p>Discover your next favorite movie!</p>

      <div className='recommendations-section'>
        <h2>Recommended Movies</h2>
        {recommendations.length > 0 ? (
          <>
            <div className='recommendations-grid'>
              {recommendations.map((movie) => (
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
            {/* Barra de paginación */}
            <div className='pagination'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>Loading recommendations...</p>
        )}
      </div>
    </div>
  )
}

export default Home
