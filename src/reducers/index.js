import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import favoritesReducer from './favoritesReducer';

const Reducers = combineReducers({
    movieReducer, 
    favoritesReducer
})

export default Reducers;