import { createStore } from 'redux';
import rootReducer from 'javascripts/reducers/';

const store = createStore(rootReducer);

export default store;
