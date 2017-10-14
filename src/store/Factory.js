import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {albums, songs, favorites} from './albumReducers';
import {errors} from './errorReducers';

const appReducer = combineReducers({
  albums,
  songs,
  favorites,
  errors
});

export default (initialState={}) => applyMiddleware(thunk)(createStore)(appReducer, initialState);
