import React, { Component } from 'react';
import data from '../data/nav';
import List from '../component/List';

class Intro extends Component{
	render(){
		return (
			<div>
				<List data={data['intro']}></List>
			</div>
		);
	}
}

export default Intro;