import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Form to add a new movie with a genre
function AddMovieForm() {

const dispatch = useDispatch();

  // data from redux
const genres = useSelector(store => store.genre);

  // local state for form inputs
let [movieTitle, setMovieTitle] = useState('');
let [moviePosterUrl, setMoviePosterUrl] = useState('');
let [movieDescription, setMovieDescription] = useState('');
let [movieGenre_id, setMovieGenre_id] = useState(0);

  // handle form submission
const handleAddMovieClick = () => {
    console.log('new movie', movieTitle, moviePosterUrl, movieDescription, movieGenre_id);
    dispatch({ type: 'ADD_MOVIE', payload: { movieTitle, moviePosterUrl,movieDescription, movieGenre_id }});
};

return (
    <div>
    <h2>Add Movie</h2>
    <form>
    <input type="text" value={movie} 
            onChange={(evt) => setMovieTitle(evt.target.value)} />

    <input type="text" value={poster} 
            onChange={(evt) => setMoviePosterUrl(evt.target.value)} />
    
    <fieldset>
        <legend>Movie Description</legend>
            <p>
            <textarea class="noscrollbars" 
                onkeyup="autoGrow(this);"
                onChange={(evt) => setMovieDescription(evt.target.value)}
                value={movieDescription}>
            </textarea>
            </p>
    </fieldset>

    
        {/* drop down with genre names */}
    <select value={movieGenre_id} 
        onChange={(evt) => setMovieGenre_id(evt.target.value)}>

    
        
        <option disabled value='0'>
        Pick One!
        </option>
        {genres.map((genre) => {
        return (
            <option key={genre.id} value={genre.id}>
            {genre.name}
            </option>
            );
        })}
        </select>
    </form>

        <button onClick={handleAddMovieClick}>Add Movie!</button>
    </div>
    );
}

export default AddMovieForm;
