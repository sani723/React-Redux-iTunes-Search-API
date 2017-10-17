import ActionTypes from './utils/ActionTypes';

// Load messages
export const loadMessage = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.FETCH_MESSAGE,
    payload: getState().message
  });
}


// Add a message
export const addMessage = (message) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
  });
}


// Remove a message
export const removeMessage = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.CLEAR_MESSAGE
  });
}
