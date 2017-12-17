import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/Routes';
import Home from './page/Home';

import registerServiceWorker from './registerServiceWorker';

let rootElem = document.getElementById('root');

ReactDOM.render((
	<Routes></Routes>
), rootElem);

registerServiceWorker();
