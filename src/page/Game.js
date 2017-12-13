import React, { Component } from 'react';
import List from '../component/List';
import gameName from '../data/game';
import Nav from '../page/Nav';

import {
  Link
} from 'react-router-dom';


class Game extends Component{
	render(){
		return (
			<div>
				<Nav cur='game' />
				<List data={gameName}/>
			</div>
		);
	}
}

export default Game;