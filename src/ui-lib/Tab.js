import React, { Component } from 'react';
import './Tab.css';
import tab_data from './data/tab-data';

class Tab extends Component{
	constructor(props){
		super(props);

		this.state = {
			content: tab_data[0]['content']
		};

		this.status = [];
	}

	tabMenu(){
		const arr = [];
		let len = tab_data.length;
		let w = 90/len;
		let css = {
			width: '' + w + '%'
		};

		let klassStr = '';

		for(let i = 0; i < len; i++){
			if(i === 0){
				klassStr = 'tab-menu-item active';
			}else{
				klassStr = 'tab-menu-item';
			}

			arr.push(<div className={klassStr} style={css} onClick={this.changeTab.bind(this, i)} key={i}>{tab_data[i]['title']}</div>);
		}

		return arr;
	}
	
	render(){
		return (
			<div className="tab-box">
				<div className="tab-menu">
					{this.tabMenu()}
				</div>
				<div className="tab-content">
					{this.state.content}
				</div>
			</div>
		);
	}

	changeTab(index){
		console.log(index);
		this.setState({
			content: tab_data[index]['content']
		});
	}
}

export default Tab;