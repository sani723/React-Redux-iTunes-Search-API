import ActionTypes from './utils/ActionTypes';

// Load errors
export const loadMessage = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.FETCH_ERROR,
    payload: getState().errors
  });
}


// Add an error
export const addMessage = (message) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.ADD_ERROR,
    payload: message
  });
}


// Remove an error
export const removeMessage = (errorIndex) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.CLEAR_ERROR,
    payload: errorIndex
  });
}
