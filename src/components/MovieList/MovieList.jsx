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

    const addMovieButton = () => {
        history.push('/addMovie')
    }

    return (
        <main>
            
            <h1>MovieList</h1>
            <button className="addButton" onClick={addMovieButton}>Add a movie</button>
                {movies.map(movie, index => {
                    return (
                        <section className="movies">
                        <MovieItem key={movies.id} movieItem={movies} />
                            <h3>{movies.title}</h3>
                            <img src={movies.poster} alt={movies.title}/>
                        </section>
                    );
                    
                })}
            
        </main>

    );
}

export default MovieList;