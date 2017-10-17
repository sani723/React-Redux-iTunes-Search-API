import ActionTypes from './utils/ActionTypes';
import * as API from '../api/api';

// Load albums by artist
export const loadAlbums = (artist, searchType) => (dispatch, getState) => {
  API.fetchArtistAlbums(artist, searchType).then( data => {
    let albums = [];
    albums =  data.results.filter( (album) => {
      return album.artistName.toLowerCase().includes(artist.toLowerCase());
    });

    // Set isFavorite: false for first time for all albums
    albums = albums.map( (album) => Object.assign({}, album, album.isFavorite = false ));

    dispatch ({
      type: ActionTypes.FETCH_ALBUMS,
      payload: albums
    });

    dispatch ({
      type: ActionTypes.ADD_SEARCH_TERM,
      payload: artist
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
  //console.log(typeof favAlbum);
  //const likedFavAlbum = Object.assign({}, favAlbum, favAlbum.isFavorite = true );

  dispatch ({
    type: ActionTypes.ADD_FAVORITE,
    payload: favAlbum
  });

  dispatch({ type: ActionTypes.ADD_MESSAGE, payload: `${favAlbum.collectionName} Album has been added to your favorites.` });
  setTimeout( () => { dispatch ({ type: ActionTypes.CLEAR_MESSAGE }); }, 3000);

}


// Remove an album from favorites
export const removeFavoriteAlbum = (album) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.REMOVE_FAVORITE,
    payload: album.collectionId
  });

  dispatch({ type: ActionTypes.ADD_MESSAGE, payload: `${album.collectionName} Album has been removed from your favorites.` });
  setTimeout( () => { dispatch ({ type: ActionTypes.CLEAR_MESSAGE }); }, 3000);


}

// Remove an album from favorites
export const favoriteCount = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.COUNT_FAVORITES,
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



// Load search term
export const loadSearchTerm = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.FETCH_SEARCH_TERM,
    payload: getState().searchterm
  });
}


// Add search term
export const addSearchTerm = (term) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.ADD_SEARCH_TERM,
    payload: term
  });
}


// Remove a search term
export const removeSearchTerm = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.CLEAR_SEARCH_TERM
  });
}
