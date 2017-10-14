import ActionTypes from './utils/ActionTypes';

export const errors = (state=[], action) => {

  switch(action.type) {
    case ActionTypes.ADD_ERROR:
      return [...state, action.payload];
    case ActionTypes.CLEAR_ERROR:
          return state.filter( (msg, index) => index !== action.payload );
    case ActionTypes.FETCH_ERROR:
          return action.payload;
    default:
      return state;
  }

}
