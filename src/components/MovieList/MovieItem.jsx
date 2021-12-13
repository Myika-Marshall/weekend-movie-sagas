import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Display a single movie
function MovieItem({ movie }) {  
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectMovie = (movie) => {
    // store selected movie object in Redux
    dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
    // go to details view
    history.push('/details');
    };

    return (
    <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
    Movie:{movie.movie_name} Genre: {movie.genre_name}
    </li>
    ;
}

export default MovieItem;