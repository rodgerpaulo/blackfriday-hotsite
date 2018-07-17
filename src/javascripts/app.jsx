import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/app.scss';
import App from 'javascripts/layouts/home';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from 'javascripts/stores/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('jussi-react')
);
registerServiceWorker();
