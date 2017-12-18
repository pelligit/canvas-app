import React, { Component } from 'react';
import ChildNavTop from '../../page/nav/ChildNavTop';

class Caseshow extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="案例" link="/case" icon="umbrella" text1="案例的名字" />
			</div>
		);
	}
}

export default Caseshow;