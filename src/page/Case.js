import React, { Component } from 'react';
import Canvas from '../component/Canvas';
import ChildNavTop from './nav/ChildNavTop';
import Caselist from '../plate/case/Caselist';


class Case extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="案例" link="/case" icon="umbrella" />
				<Caselist />
			</div>
		);
	}
}

export default Case;