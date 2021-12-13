import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

// Display a single movie
function MovieItem({ movies }) {  
    const dispatch = useDispatch();
    const history = useHistory();

    const handleMovieSelection = (movies) => {
    // store selected movie object in Redux
    dispatch({ type: 'SET_SELECTED_MOVIE', payload: movies});
    // go to details view
    history.push('/details');
    };

    return (
        <div className="moviePoster" key={movies.id}>
            <h3> {movies.title}</h3>
            <img src={movies.poster}
            onClick={() => handleMovieSelection(movies)}></img>
    </div> 
    );
}

export default MovieItem;