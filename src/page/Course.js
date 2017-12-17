import React, { Component } from 'react';
import ChildNavTop from './nav/ChildNavTop';

class Course extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="课程" />
				这里是课程
			</div>
		);
	}
}

export default Course;