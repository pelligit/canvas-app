import React from 'react';
// import RR from 'react-router';
// import { Router, Route, Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './page/Game';
import Nav from './page/Nav';

import registerServiceWorker from './registerServiceWorker';

let RR = require('react-router');

console.log(RR);

let rootElem = document.getElementById('root');

ReactDOM.render((
		<Router>
			<div>
				<Nav cur="root" />
				<div>
					<Route exact path="/" component={App} />
					<Route path="/game" component={Game} />
				</div>
			</div>
		</Router>
), rootElem);

registerServiceWorker();
