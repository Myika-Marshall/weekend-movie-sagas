import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({type: 'FETCH_MOVIES'});
  //   dispatch({ type: 'FETCH_GENRES'})
  // })
  
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
        <Route path="/addMovie">
          <AddMovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
