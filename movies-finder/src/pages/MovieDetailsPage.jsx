import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Details for movie ID: {id}</p>
    </div>
  );
}

export default MovieDetailsPage;