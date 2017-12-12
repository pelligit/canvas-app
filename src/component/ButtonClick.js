import React, { Component } from 'react';
import './ButtonClick.css';

class ButtonClick extends Component {
	constructor(){
		super();

		this.klass = 'Button-click';
	}

	render() {
		return (<button className={this.klass} onClick={this.click}>点击</button>);
	}

	click(e){
		console.log(e);
		console.log('hello world');
		console.log(this);
		// this.klass = ' Button-yello';
	}
}

export default ButtonClick;