import ActionTypes from './utils/ActionTypes';

// Load errors
export const loadErrors = () => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.FETCH_ERROR,
    payload: getState().errors
  });
}


// Add an error
export const addError = (message) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.ADD_ERROR,
    payload: message
  });
}


// Remove an error
export const removeError = (errorIndex) => (dispatch, getState) => {
  dispatch ({
    type: ActionTypes.CLEAR_ERROR,
    payload: errorIndex
  });
}
