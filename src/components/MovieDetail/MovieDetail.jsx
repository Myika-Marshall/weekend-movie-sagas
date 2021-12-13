import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// shows the selected movie data from Redux
function MovieDetail() {
  // data from redux
const selectedMovie = useSelector((store) => store.selectedMovie);

useEffect(() => {
    // we could get more info about this movie from the server here
});

return (
    <section>
    <h1>Selected Movie</h1>
    <h2>Route: localhost:3000/#/details</h2>
    {
        selectedMovie.movie_name ? (
            <>
            <h2>{selectedMovie.movie_name}</h2>
            <p>Genre: {selectedMovie.genre_name}</p>
            </>
        ) : (
            <p>No Movie selected.</p>
        )
        }
    </section>
    );
}

export default MovieDetail;
