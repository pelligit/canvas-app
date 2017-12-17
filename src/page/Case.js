import React, { Component } from 'react';
import Canvas from '../component/Canvas';
import ChildNavTop from './nav/ChildNavTop';


class Case extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="案例" />
				<Canvas />
			</div>
		);
	}
}

export default Case;