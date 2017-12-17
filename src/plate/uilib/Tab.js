import React, { Component } from 'react';
import './Tab.css';
import tab_data from './data/tab-data';

class Tab extends Component{
	constructor(props){
		super(props);

		this.state = {
			content: tab_data[0]['content']
		};

		this.len = tab_data.length;
		this.status = this.setStatusArr(0);
	}

	tabMenu(){
		const arr = [];
		
		// 计算每个tab占的百分比宽度
		let w = 100/this.len;

		let css = {
			width: '' + w + '%'
		};

		let activeStr = 'tab-menu-item active';
		let klassStr = 'tab-menu-item';
		let verticalLine = <span className="vertical-split-line"></span>;
		let noLine = <span className="no-split-line"></span>;

		for(let i = 0; i < this.len; i++){
			let curStatus = this.status[i];
			let condition = curStatus === 1 || this.status[i - 1] === 1 || i === 0;

			arr.push(
				<div className={curStatus === 1 ? activeStr : klassStr} style={css} onClick={this.changeTab.bind(this, i, tab_data[i]['fn'])} key={i}>
					{tab_data[i]['title']}
					{condition ? noLine : verticalLine}
				</div>
				);
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

	changeTab(index, fn){
		this.status = this.setStatusArr(index);

		this.setState({
			content: tab_data[index]['content']
		});

		if(fn && typeof fn === 'function'){
			fn(index, tab_data[index]['title'], tab_data[index]['content'], this);
		}
	}

	setStatusArr(index){
		const arr = [];

		for(let i = 0; i < this.len; i++){
			if(i === index){
				arr.push(1);
			}else{
				arr.push(2);
			}
		}

		return arr;
	}
}

export default Tab;