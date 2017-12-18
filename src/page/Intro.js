import React, { Component } from 'react';
import data from '../data/nav';
import List from '../component/List';
import ChildNavTop from './nav/ChildNavTop';

class Intro extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="介绍" link="/intro" icon="glass" />
				<List data={data['intro']}></List>
			</div>
		);
	}
}

export default Intro;