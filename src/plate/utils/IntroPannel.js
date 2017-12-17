import React, { Component } from 'react';
import './IntroPannel.css';

class IntroPannel extends Component{
	render(){
		return (
			<div className="intro-pannel-box">
				<h3 className="intro-pannel-title">{this.props.title}</h3>
				<div className="intro-pannel-content">{this.props.content}</div>
			</div>
		);
	}
}

export default IntroPannel;