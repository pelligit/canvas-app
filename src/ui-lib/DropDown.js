import React, { Component } from 'react';
import drop_down_data from './data/drop-down-data';
import './DropDown.css';

class DropDown extends Component{
	constructor(props){
		super(props);

		this.state = {
			show: true
		};
	}

	getList(_names){
		const arr = [];

		let len = _names.length;

		for(let i = 0; i < len; i++){
			arr.push(<li key={i} className="drop-down-item" onClick={this.selectItem.bind(this, _names[i])}>{_names[i]}</li>);
		}

		return arr;
	}


	selectItem(name){
		console.log(name);
	}

	render(){
		const names = drop_down_data['name'];

		let css = {
			display: !this.state.show ? 'none' : 'block'
		};

		let titleBorder = {
			borderBottom: 'solid 1px rgba(250, 160, 0, 1)'
		};

		return (
			<div className="drop-down-container">
				<div className="drop-down-title" style={this.state.show ? titleBorder : {}}>
					<span onClick={this.toggleDropDown.bind(this)}>{drop_down_data['title']}</span>
				</div>
				<ul className="drop-down-item-box" style={css}>
					{this.getList(names)}
				</ul>
			</div>
		);
	}


	toggleDropDown(){
		let pre = this.state.show;

		this.setState({
			show: !pre
		});
	}
}

export default DropDown;