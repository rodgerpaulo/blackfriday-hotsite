import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/app.scss';
import App from './layouts/layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('jussi-react'));
registerServiceWorker();
