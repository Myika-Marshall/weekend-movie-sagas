import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect } from 'react';

// shows the selected movie data from Redux
function MovieDetails() {
  // data from redux
    const movie = useSelector((store) => store.selectedMovie);
    const history = useHistory();
    // useEffect(() => {
    // // we could get more info about this movie from the server here
    // });
    const returnToHomePage = () => {
        history.push('/')};
    

    return ( 
        <section>
        <h1>Selected Movie</h1>
            <img className="poster" src={movie.poster} alt={movie.title} />
            <div className="details">
                <h3 className="title">{movie.title}</h3>
                <h3 className="genre">{movie.name}</h3>
                <h3 className="description">{movie.description}</h3>
            </div>

            <button onClick={returnToHomePage}>Return to Movie List</button>
        </section>
    );
}


export default MovieDetails;
