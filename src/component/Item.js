import React, { Component } from 'react';
import './Item.css';

class Item extends Component{
	render(){
		return (
			<li className="item-li">{this.props.text}</li>
		);
	}
}

export default Item;