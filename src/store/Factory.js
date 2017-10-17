import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {albums, songs, favorites, fetchingStatus, filteredArtists, searchterm} from './albumReducers';
import {message} from './messageReducers';

const appReducer = combineReducers({
  albums,
  songs,
  favorites,
  fetchingStatus,
  filteredArtists,
  message,
  searchterm
});

export default (initialState={}) => applyMiddleware(thunk, logger)(createStore)(appReducer, initialState);
