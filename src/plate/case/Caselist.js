import React, { Component } from 'react';
import list_data from './data/list_data';
import { Link } from 'react-router-dom';

class Item extends Component{
	render(){
		return (<li><Link to={this.props.link}>{this.props.text}</Link></li>);
	}
}

class List extends Component{

	render(){
		function getList(){
			let len = list_data.length;
			const arr = [];
			for(let i = 0; i < len; i++){
				let curObj = list_data[i];
				arr.push(<Item key={"list-" + i} link={curObj['link']} text={curObj['text']} />);
			}

			return arr;
		}

		return getList();
	}
}

class Caselist extends Component{
	render(){
		return (
			<div>
				<ul>
					<List />
				</ul>
			</div>
		);
	}
}


export default Caselist;