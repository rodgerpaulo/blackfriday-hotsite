import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/app.scss';
import App from 'javascripts/layouts/home';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from 'javascripts/helpers/localStorage'; //eslint-disable-line
import throttle from 'lodash/throttle';

import { Provider } from 'react-redux';
import store from 'javascripts/stores/index';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }),
  1000
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('jussi-react')
);
registerServiceWorker();
