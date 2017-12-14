import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './page/Nav';
import Routes from './page/Routes';
import Clock from './component/Clock';

import registerServiceWorker from './registerServiceWorker';

let rootElem = document.getElementById('root');

ReactDOM.render((
	<Routes>
		<Nav cur="no-page" />
		<Clock />
	</Routes>
), rootElem);

registerServiceWorker();
