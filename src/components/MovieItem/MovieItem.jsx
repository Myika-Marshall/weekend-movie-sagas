import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

// Display a single movie
function MovieItem({ movieItem}) {  
    const dispatch = useDispatch();
    const history = useHistory();

    const handleMovieSelection = (movieItem) => {
    // store selected movie object in Redux
    dispatch({ type: 'SET_SELECTED_MOVIE', payload: movieItem});
    // go to details view
    history.push('/details');
    };

    return (
        <div className="moviePoster" key={movieItem.id}>
            <h3> {movieItem.title}</h3>
            <img src={movieItem.poster}
            onClick={() => handleMovieSelection(movieItem)}></img>
    </div> 
    );
}

export default MovieItem;