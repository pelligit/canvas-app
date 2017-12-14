import React, { Component } from 'react';
import List from '../component/List';
import gameName from '../data/game';


class Game extends Component{
	render(){
		return (
			<div>
				<List data={gameName}/>
			</div>
		);
	}
}

export default Game;