import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import App from '../App';
import Game from './Game';
import Case from './Case';
import Course from './Course';
import Intro from './Intro';
import Uilib from './Uilib';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

class Routes extends Component{
	render(){
		return (
			<Router history={history}>
				<div>
					<div>
						{this.props.children}
					</div>
					<div>
						<Route exact path="/" component={App} />
						<Route path="/game" component={Game} />
						<Route path="/case" component={Case} />
						<Route path="/course" component={Course} />
						<Route path="/intro" component={Intro} />
						<Route path="/uilib" component={Uilib} />
					</div>
				</div>
			</Router>
		);
	}
}

export default Routes;