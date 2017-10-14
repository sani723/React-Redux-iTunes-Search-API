import ActionTypes from './utils/ActionTypes';
import * as API from '../api/api';

// Load albums by artist
export const loadAlbums = (artist, searchType) => (dispatch, getState) => {
  API.fetchArtistAlbums(artist, searchType).then( data => {
    let albums = [];
    albums =  data.results.filter( (album) => {
      return album.artistName.toLowerCase().includes(artist.toLowerCase());
    });
    dispatch ({
      type: ActionTypes.FETCH_ALBUMS,
      payload: albums
    });
  });
}



// Load selected album details
export const loadAlbumDetail = (collectionId, searchType) => (dispatch, getState) => {
  API.fetchAlbumDetails(collectionId, searchType).then( data => {
    let songs = [];
    songs =  data.results.filter( (song) => {
      return song.wrapperType === 'track';
    });
    dispatch ({
      type: ActionTypes.FETCH_ALBUM_DETAIL,
      payload: songs
    });
  });
}



// Load favorites
export const loadFavoriteAlbums = () => (dispatch, getState) => {
  dispatch ({
      type: ActionTypes.FETCH_FAVORITE,
      payload: getState().favorites // gets all favorites from store
  });
}


// Add an album in favorites
export const addFavoriteAlbum = (favAlbum) => (dispatch, getState) => {

  dispatch ({
    type: ActionTypes.ADD_FAVORITE,
    payload: favAlbum
  });

  dispatch({
    type: ActionTypes.ADD_ERROR,
    payload: "Album has been added to your favorite list."
  });

  console.log("Album has been set as favorite " + favAlbum);
  // todo: Another dispatch for message that Item has been set as favorite
}


// Remove an album from favorites
export const removeFavoriteAlbum = (collectionId) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.REMOVE_FAVORITE,
    payload: collectionId
  });
  // todo: Another dispatch for message that Item has been remove as favorite
}
