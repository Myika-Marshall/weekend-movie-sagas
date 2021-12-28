import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Form to add a new movie with a genre
function AddMovieForm() {

const genres = useSelector(store => store.genres);
const dispatch = useDispatch();
const history = useHistory();

let [title, setTitle] = useState('');
let [poster, setPoster] = useState('');
let [description, setDescription] = useState('');
let [genre_id, setGenre_id] = useState(0);

  // handle form submission
const handleAddMovieClick = (e) => {
    e.preventDefault();
    console.log('new movie', title, poster, description, genre_id);
    dispatch({ type: 'ADD_MOVIE', payload: { title, poster, description, genre_id }});
    history.push('/');
}

    


const returnToHomePage = () => {
    history.push('/')
}

return (
    <div>
        <h2>Add Movie</h2>
        <form>
            <input 
                type="text" 
                value={title} 
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)} />

            <input 
                type="url" 
                value={poster}
                placeholder="poster url" 
                onChange={(e) => setPoster(e.target.value)} />

            <input
                type="text"
                vslue={description}
                placeholder='Movie Description'
                onChange={(e)=> setDescription(e.target.value)}/>

    
        {/* drop down genre names */}
            <select value={genre_id} 
                onChange={(e) => setGenre_id(e.target.value)}>
                <option disabled value='0'>
                Pick a genre!
                </option>
                    {genres.map((genre) => {
                        return (
                        <option 
                        key={genre.id} 
                        value={genre.id}>
                        {genre.name}
                        </option>
                        );
                    })}
            </select>
            <button onClick={()=>{handleAddMovieClick()}}> Save Movie!</button>
            <button onClick={()=>{returnToHomePage()}}>Return to Movie List</button>
        </form>

            </div>
        );
                
}
export default AddMovieForm;
