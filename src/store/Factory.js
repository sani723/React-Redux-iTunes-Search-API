import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {albums, songs, favorites, fetchingStatus, filteredArtists} from './albumReducers';
import {messages} from './messageReducers';

const appReducer = combineReducers({
  albums,
  songs,
  favorites,
  fetchingStatus,
  filteredArtists,
  messages
});

export default (initialState={}) => applyMiddleware(thunk)(createStore)(appReducer, initialState);
