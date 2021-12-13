import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// shows the selected movie data from Redux
function MovieDetails() {
  // data from redux
const selectedMovie = useSelector((store) => store.selectedMovie);
const history = useHistory();
useEffect(() => {
    // we could get more info about this movie from the server here
});
const returnToHomePage = () => {
    history.push('/')

return (
    <section>
    <h1>Selected Movie</h1>
        <img className="movie-poster" src={selectedMovie.poster} alt={selectedmovie.title} />
        <div className="movie-details">
            <h3 className="movie-title">{selectedMovie.title}</h3>
            <h3 className="movie-genre">{selectedMovie.name}</h3>
            <h3 className="movie-description">{selectedMovie.description}</h3>
        </div>

        <button onClick={returnToHomePage}>Return to Movie List</button>
    </section>
    );
}}

export default MovieDetails;
