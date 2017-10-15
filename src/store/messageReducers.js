import ActionTypes from './utils/ActionTypes';

export const messages = (state=[], action) => {

  switch(action.type) {
    case ActionTypes.ADD_MESSAGE:
      //return [...state, action.payload];
      return action.payload;
    case ActionTypes.CLEAR_MESSAGE:
          //return state.filter( (msg, index) => index !== action.payload );
          return action.payload;
    case ActionTypes.FETCH_MESSAGE:
          return action.payload;
    default:
      return state;
  }

}
