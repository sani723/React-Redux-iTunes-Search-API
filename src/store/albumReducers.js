import ActionTypes from './utils/ActionTypes';

export const albums = (state=[], action) => {

  switch(action.type) {
    case ActionTypes.FETCH_ALBUMS:
      return action.payload;
    default:
      return state;
  }

}



export const songs = (state=[], action) => {

  switch(action.type) {
    case ActionTypes.FETCH_ALBUM_DETAIL:
          return action.payload;
    default:
      return state;
  }

}


export const favorites = (state=[], action) => {

  switch(action.type) {
    case ActionTypes.ADD_FAVORITE:
      const hasFavoriteAlready = state.some( favoriteItem => favoriteItem.collectionId === action.payload )
        return (hasFavoriteAlready) ? state: [...state, action.payload]; // todo: add error message that record already exists
    case ActionTypes.REMOVE_FAVORITE:
          return state.filter( (favoriteItem, index) => favoriteItem.collectionId !== action.payload );
    case ActionTypes.FETCH_FAVORITE:
          return action.payload;
    default:
      return state;
  }

}
