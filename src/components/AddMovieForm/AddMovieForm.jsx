import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
// Form to add a new movie with a genre
function AddMovieForm() {
    useEffect(() => {
    dispatch({ type: 'FETCH_GENRES'});
    }, []);

  // data from redux
const genres = useSelector(store => store.genres);
const dispatch = useDispatch();
const history = useHistory();
  // local state for form inputs
const [title, setMovieTitle] = useState('');
const [poster, setMoviePosterUrl] = useState('');
const [description, setMovieDescription] = useState('');
const [genre_id, setMovieGenre_id] = useState(0);

  // handle form submission
const handleAddMovieClick = () => {
    console.log('new movie', title, poster, description, genre_id);
    dispatch({ type: 'ADD_MOVIE', payload: { title, poster, description, genre_id }});
    }
    history.push('/');


const returnToHomePage = () => {
    history.push('/')
}

return (
    <div>
        <h2>Add Movie</h2>
        <form>
            <input type="text" value={title} 
                onChange={(evt) => setMovieTitle(evt.target.value)} />

            <input type="text" value={poster} 
                onChange={(evt) => setMoviePosterUrl(evt.target.value)} />
            <fieldset>
                <legend>Movie Description</legend>
                <p>
                <textarea class="noscrollbars" 
                    value={description}
                    onkeyup="autoGrow(this);"
                    onChange={(evt) => setMovieDescription(evt.target.value)}>
                </textarea>
                </p>
            </fieldset>

    
        {/* drop down with genre names */}
            <select value={genre_id} 
                onChange={(evt) => setMovieGenre_id(evt.target.value)}>
                <option disabled value='0'>
                Pick a genre!
                </option>
                    {genres.map((genre) => {
                        return (
                        <option key={genre.id} value={genre.id}>
                        {genre.name}
                        </option>
                        );
                    })}
            </select>
            <button onClick={handleAddMovieClick}> Save Movie!</button>
            <button onClick={returnToHomePage}>Return to Movie List</button>
        </form>

            </div>
        );
                
}
export default AddMovieForm;
