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
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAILS,', fetchDetails);
    yield takeEvery('ADD_MOVIES', addMovie);
    yield takeEvery ('FETCH_GENRES', fetchGenres)


}

function* fetchMovies() {
    // get the  movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('GET all movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch(err) {
        console.log('GET all movies error');
    }
        
};

//GET movie details
function* fetchDetails(action) {
    try {
        // 
        const details= yield axios.get(`/api/movie/details/${action.payload}`)
        console.log('GET details:', details.data)
        yield put({type: 'SET_DETAILS', payload: details.data});
    } catch(err) {
        console.log('fetchDetails error');
    };
}


// Adding a new movie to the Database
function* addMovie(action) {
    try {
        console.log('in addMovie, action.payload is:', action.payload)
        yield axios.post('/api/movie', action.payload);
        yield put({ type: 'FETCH_MOVIES'})
    } catch(err) {
        console.log('POST error in addMovie', err);
        
    }
}

function* fetchGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        yield put({ type: 'SET_GENRES', payload: genres.data });
    } catch {
        console.log('error in fetch Genres');
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


const selectedMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVIE':
            return action.payload;
            default:
                return state;
    }
}
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
    document.getElementById('root'));
