import {HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { useHistory } from 'react-router-dom';

// Connecting Components
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {

  const history = useHistory();

  return (
    <div className="App">
      <header className="header">
      <h1>The Movies Saga!</h1>
      </header>
      <Router>        
        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Detils */}
        <Route path="/details/:id">
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
