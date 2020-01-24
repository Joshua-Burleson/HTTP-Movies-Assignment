import React from 'react';
import { deleteMovie } from '../utils/utils';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  console.log(props.location);
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      {props.location && <button onClick={() => deleteMovie(props.movie.id, props.location)}>Delete</button>}
      {props.location && <button onClick={() => props.location.push({pathname: '/update', state: {movie: props.movie}})}>Update</button>}
    </div>
  );
};

export default MovieCard;
