import React, { Component } from 'react';
import './ButtonClick.css';

class ButtonClick extends Component {
	constructor(props){
		super(props);

		this.state = {
			klass: 'Button-click',
			count: 0
		};

		// 绑定this
		this.click = this.click.bind(this);
	}

	render() {
		return (<button className={this.state.klass} onClick={this.click}>点击</button>);
	}

	click(){
		this.klass = ' Button-yellow';

		let preKlass = this.state.klass;
		let count = this.state.count;
		let endCount = count + 1;

		if(count%2 === 0){
			this.setState({
				klass: 'Button-click Button-yellow',
				count: endCount
			});
		}else{
			this.setState({
				klass: 'Button-click',
				count: endCount
			});
		}
	}
}

export default ButtonClick;