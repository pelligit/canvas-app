import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ChildNavTop from '../../page/nav/ChildNavTop';

class Gameplay extends Component{
	render(){
		return (
			<div>
				<ChildNavTop link="/game" text="游戏" text1="游戏的名字" />
			</div>
		);
	}
}


export default Gameplay;