import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Game from '../page/Game';
import Case from '../page/Case';
import Course from '../page/Course';
import Intro from '../page/Intro';
import Uilib from '../page/Uilib';
import Home from '../page/Home';
import Saolei from '../plate/game/Saolei';

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
						<Route exact path="/" component={Home} />
						<Route path="/game" component={Game} />
						<Route path="/game/saolei" component={Saolei} />
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