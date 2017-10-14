import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {albums, songs, favorites} from './albumReducer';
import {errors} from './errorReducer';

const appReducer = combineReducers({
  albums,
  songs,
  favorites,
  errors
});

export default (initialState={}) => applyMiddleware(thunk)(createStore)(appReducer, initialState);
