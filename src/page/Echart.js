import React, { Component } from 'react';
import ChildNavTop from './nav/ChildNavTop';

class Echart extends Component{
	render(){
		return (
			<ChildNavTop text="图表" link="/echart" icon="bar-chart" />
		);
	}
}


export default Echart;