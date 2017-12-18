import React, { Component } from 'react';
import ChildNavTop from '../../page/nav/ChildNavTop';
import './common/css/common.css';

class Saolei extends Component{
	render(){
		return (
			<div className="game-container">
				<canvas width="300" height="300" ref="game_here"></canvas>
			</div>
		);
	}

	componentDidMount(){
		console.log(this);
		let elem = this.refs['game_here'];
		// elem.width = 500;
		elem.height = 600;
		console.log(elem);
	}
}

export default Saolei;