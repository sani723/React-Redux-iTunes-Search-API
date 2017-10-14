import storeFactory from './Factory';

// sets initialState from localStorage if does exits otherwisse set to empty object
const initialState = (localStorage['iTuneStore']) ? JSON.parse(localStorage['iTuneStore']) : {};

// saves state to localStorage
const saveState = () => (localStorage['iTuneStore'] = JSON.stringify(store.getState()));

// creates store
const store = storeFactory(initialState);

// exposes the store to global variable for use in console for debugging e.g. [ store.getState(); ]
// todo: remove for PRODUCTION
window.store = store;

// saves state to localStorage every time state changes
store.subscribe(saveState);

export default store;
