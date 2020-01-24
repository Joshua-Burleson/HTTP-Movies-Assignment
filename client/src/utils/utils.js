import axios from 'axios';

const axReq = axios.create({
    baseURL: 'http://localhost:5000/api/movies'
});

export const deleteMovie = (movieID, location) => {
    axReq.delete(`/${movieID}`)
         .then(res => location.push('/movies'))
         .catch(err => console.log('Axios Error!: ', err));
};


export const updateFilm = (movie, location) => {
    console.log(movie)
    axReq.put(`/${movie.id}`, movie)
         .then(res => location.push('/movies'))
         .catch(err => console.log('Axios Error!: ', err));
};