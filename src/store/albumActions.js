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
  //console.log("Favorites = " + favorites);
  dispatch ({
      type: ActionTypes.FETCH_FAVORITE,
      payload: favorites // gets all favorites from store
  });
}


// Add an album in favorites
export const addFavoriteAlbum = (favAlbum) => (dispatch, getState) => {

  //const hasFavoriteAlready = state.some( favoriteItem => favoriteItem.collectionId === action.payload.collectionId )
  //return (hasFavoriteAlready) ? state: [...state, action.payload]; // todo: add message that record already exists

  dispatch ({
    type: ActionTypes.ADD_FAVORITE,
    payload: favAlbum
  });

  //dispatch({
  //  type: ActionTypes.ADD_ERROR,
  //  payload: "Album has been added to your favorite list."
  //});

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

// Remove an album from favorites
export const favoriteCount = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.COUNT_FAVORITE,
    payload: getState().favorites
  });
  // todo: Another dispatch for message that Item has been remove as favorite
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
