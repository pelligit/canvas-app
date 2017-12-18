import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ChildNavTop from './nav/ChildNavTop';
import IntroPannel from '../plate/utils/IntroPannel';
import game_intro from './data/game-intro';
import Gamelist from '../plate/game/Gamelist';
import Saolei from '../plate/game/Saolei';
import FightWithPlane from '../plate/game/FightWithPlane';

class Game extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="游戏" link="/game" icon="gamepad" />
				<IntroPannel title={game_intro['title']} content={game_intro['content']} />

				<Gamelist />
			</div>
		);
	}
}

export default Game;