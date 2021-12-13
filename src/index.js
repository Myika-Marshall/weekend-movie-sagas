import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIES', addMovie);

}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('GET all movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch(err) {
        console.log('GET all movies error');
    }
        
};

// Grab Genres from the Database
function* fetchGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        console.log('GET genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data});
    } catch(err) {
        console.log('GET genres error');
        
    }
}


// Adding a new movie to the Database
function* addMovie(action) {
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({ type: 'FETCH_MOVIES'})
    } catch(err) {
        console.log('POST error in addMovie', err);
        
    }
}

//Movie chosen
const selectedMovie = (state=[], action) => {
    switch (action.type){
        case 'SET_CHOSEN_MOVIE':
            console.log('Chosen Movie:', action.payload);
            
            return action.payload;
        default:
            return state;
    }
} 



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            console.log('SET_MOVIES', action.payload)
            return action.payload;
            
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('SET_GENRES:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
