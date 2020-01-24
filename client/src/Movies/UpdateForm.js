import React, { useState } from 'react';
import { updateFilm } from '../utils/utils';

const UpdateForm = props => {
    const [movie, updateMovie] = useState({
        id: Number(props.location.state.movie.id) >= 0? props.location.state.movie.id : '',
        title: props.location.state.movie.title || '',
        director: props.location.state.movie.director || '',
        metascore: props.location.state.movie.metascore || '',
        stars: props.location.state.movie.stars || ''
    });

    const handleChange = event => {
        console.log(movie);
        if(event.target.name === 'stars'){
            event.target.value = event.target.value.split(',')
        }
        updateMovie({...movie, [event.target.name] : event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(movie)
        if(!Array.isArray(movie.stars)) updateMovie({...movie, stars: movie.stars.split(',')});
        updateFilm(movie, props.history);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Movie</h3>
            <label htmlFor='title'>Title</label>
            <input type="text" name="title" value={movie.title} onChange={handleChange}></input>
            <label htmlFor='director'>Director</label>
            <input type="text" name="director" value={movie.director} onChange={handleChange}></input>
            <label htmlFor='metascore'>Metascore</label>
            <input type="number" max="100" name="metascore" value={movie.metascore} onChange={handleChange}></input>
            <label htmlFor='stars'>Stars (Seperate with Comma)</label>
            <input type="text" name="stars" value={movie.stars} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    );
}

export default UpdateForm;