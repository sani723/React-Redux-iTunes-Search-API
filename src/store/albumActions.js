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

  // start fetching
  dispatch ({
    type: ActionTypes.START_FETCHING
  });

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

  // cancel fetching
  dispatch ({
    type: ActionTypes.CANCEL_FETCHING
  });

}



// Load favorites
export const loadFavoriteAlbums = () => (dispatch, getState) => {
  const favorites = getState().favorites;
  dispatch ({
      type: ActionTypes.FETCH_FAVORITE,
      payload: favorites // gets all favorites from store
  });
}



// Load favorites
export const loadFilteredFavoriteAlbumsByArtist = (artist) => (dispatch, getState) => {
  let filteredArtists = [];
  if(artist !== 'allArtists') {
    filteredArtists = getState().favorites.filter( album => album.artistName === artist );
  } else {
    filteredArtists = getState().favorites
  }
  dispatch ({
      type: ActionTypes.FETCH_ARTISTS,
      payload: filteredArtists
  });
}


// Add an album in favorites
export const addFavoriteAlbum = (favAlbum) => (dispatch, getState) => {

  dispatch ({
    type: ActionTypes.ADD_FAVORITE,
    payload: favAlbum
  });

  dispatch({
    type: ActionTypes.ADD_MESSAGE,
    payload: `${favAlbum.collectionName} Album has been added to your favorite list.`
  });

  // todo: Another dispatch for message that Item has been set as favorite
}


// Remove an album from favorites
export const removeFavoriteAlbum = (album) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.REMOVE_FAVORITE,
    payload: album.collectionId
  });
  // todo: Another dispatch for message that Item has been remove as favorite
}

// Remove an album from favorites
export const favoriteCount = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.COUNT_FAVORITE,
    payload: getState().favorites
  });

}



export const startFetching = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.START_FETCHING
  });
}

export const cancelFetching = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.CANCEL_FETCHING
  });
}
