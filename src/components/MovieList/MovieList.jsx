import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function addMovieButton(){
        history.push(`/addMovie`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={()=>{addMovieButton()}}>Add a Movie!</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movieItem={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;