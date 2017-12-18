import React, { Component } from 'react';
import ChildNavTop from './nav/ChildNavTop';

class Svg extends Component{
	render(){
		return (
			<div>
				<ChildNavTop link="/svg" text="SVG" icon="image" />
				<div>这是svg</div>
			</div>
		);
	}
}

export default Svg;