import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// shows the selected movie data from Redux
function MovieDetails() {
  // data from redux
    const movie = useSelector((store) => store.selectedMovie);
    const history = useHistory();
    const params= useParams();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        console.log('params.id:', params.id)
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id
        })
    },[]);
    
    
    const returnToHomePage = () => {
        history.push('/')};
    

    return ( 
        <div>
        <h1>{movie.title}</h1>
        <img src={movie.poster} alt= {movie.title}></img>
        <h3>{movie.description}</h3>
        <button onClick={()=>{returnToHomePage()}}>Back</button>
        {/* {movie.genres.map((genres)=>{
            return (
                <li>{genre}</li>
            )}
        )} */}
    </div>
)
}


export default MovieDetails;
