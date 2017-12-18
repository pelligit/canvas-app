import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Case from '../page/Case';
import Caseshow from '../plate/case/Caseshow';
import Course from '../page/Course';
import Intro from '../page/Intro';
import Uilib from '../page/Uilib';
import Home from '../page/Home';

import Game from '../page/Game';
import Gameplay from '../plate/game/Gameplay';
import Saolei from '../plate/game/Saolei';
import FightWithPlane from '../plate/game/FightWithPlane';
import Svg from '../page/Svg';
import Echart from '../page/Echart';

import Article from '../page/Article';
import ArticleShow from '../plate/article/ArticleShow';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

class Routes extends Component{
	render(){
		return (
			<Router history={history}>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/game" component={Game} />
					<Route path="/gameplay" component={Gameplay} />
					<Route path="/gameplay/saolei" component={Saolei} />
					<Route path="/gameplay/fight-with-plane" component={FightWithPlane} />
					<Route path="/case" component={Case} />
					<Route path="/caseshow" component={Caseshow} />
					<Route path="/course" component={Course} />
					<Route path="/intro" component={Intro} />
					<Route path="/uilib" component={Uilib} />
					<Route path="/svg" component={Svg} />
					<Route path="/echart" component={Echart} />
					<Route path="/article" component={Article} />
					<Route path="/articleshow" component={ArticleShow} />
				</div>
			</Router>
		);
	}
}

export default Routes;