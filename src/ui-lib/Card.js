import React, { Component } from 'react';
import './Card.css';

class Card extends Component{
	render(){
		return (
			<div className="card-box">
				<div className="card-title">{this.props.title}</div>
				<div className="card-infos">
					<span className="card-info-author">{this.props.author}</span>
					<span className="card-info-time">{this.props.time}</span>
				</div>
				<div className="card-content">{this.props.content}</div>
			</div>
		);
	}
}

export default Card;