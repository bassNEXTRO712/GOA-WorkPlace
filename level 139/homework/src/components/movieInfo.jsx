import React from "react";

const MovieInfo = ({movie}) => {
    if (!movie) return null;
    if (movie === 'False'){
        return <p>Movie Is Not Defind</p>
    }

    return (
         <div>
      <h2>{movie.Title}</h2>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={`${movie.Title} poster`} style={{ width: '200px' }} />
    </div>
    )
};

export default MovieInfo;