import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'javascripts/reducers/';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({
  collapsed: true
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleware)
);
/* eslint-enable */

export default store;
