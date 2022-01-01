import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';
// Form to add a new movie with a genre
function AddMovieForm() {
    useEffect(() => {
        // dispatch({ type: 'FETCH_GENRES' });
        // dispatch ({ type: 'FETCH_MOVIES'});
    }, []);

    // const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(store => store.genres);
    


    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState('');


  // handle form submission
    const handleAddMovieClick = (e) => {
        // e.preventDefault()
        const addedMovie = { title:title, poster:poster, description:description, genre:genre}
        dispatch({ type: 'ADD_MOVIES', payload: addedMovie });
        console.log('new movie:', addedMovie);
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

            <textarea
                type="text"
                value={description}
                placeholder='Movie Description'
                onChange={(e)=> setDescription(e.target.value)}/>

    
        {/* drop down genre names 
        <select 
            placeholder="Choose a Genre"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)} 
            className="pick-genre">
            {genres.map((genre) => {
            return(<option key={genre.id} value={genre.id}>{genre.name}</option>);
            })}
        </select> */}
        </form>
            <Button 
            variant="contained"
            onClick={()=>{handleAddMovieClick()}}> Save Movie!</Button>
            <Button 
            variant="contained"
            onClick={()=>{returnToHomePage()}}>Cancel</Button>
        </div>
        );
                
}
export default AddMovieForm;
