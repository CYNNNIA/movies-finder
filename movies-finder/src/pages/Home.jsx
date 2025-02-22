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
    <main className='home-container'>
      <header>
        <h1>Welcome to Movies Finder</h1>
        <p>Discover your next favorite movie!</p>
      </header>

      <section className='recommendations-section'>
        <h2>Recommended Movies</h2>

        {recommendations.length > 0 ? (
          <>
            <section className='recommendations-grid'>
              {recommendations.map((movie) => (
                <article key={movie.id} className='movie-item'>
                  <Link to={`/movie/${movie.id}`}>
                    <figure>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                        className='movie-image'
                      />
                      <figcaption className='movie-title'>{movie.title}</figcaption>
                    </figure>
                  </Link>
                </article>
              ))}
            </section>

            <nav aria-label='Pagination' className='pagination'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </nav>
          </>
        ) : (
          <p>Loading recommendations...</p>
        )}
      </section>
    </main>
  )
}

export default Home