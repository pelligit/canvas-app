import React, { Component } from 'react';
import Item from './Item';
import './List.css';


function liItem(data){
	let len = data.length;
	
	const arr = [];

	for(let i = 0; i < len; i++){
		// 循环输出列表的时候，key属性是必不可少的
		arr.push(<Item key={i} text={ data[i] } />);
	}

	return arr;
}

class List extends Component{
	render(){	
		return (
			<div>
				<ul className="list-wraper">
					{liItem(this.props.data)}
				</ul>
			</div>
		);
	}
}

export default List;