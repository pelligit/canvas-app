import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home_path from '../data/home_path';
import './Home.css';

// 单个链接
class LinkItem extends Component{
	render(){
		return (
			<div className="link-item-box"><Link className="link-item-a" to={this.props.path}>{this.props.text}</Link></div>
		);
	}
}

class Home extends Component{
	getlinkItem(){
		const arr = [];
		let count = 0;

		for(let name in home_path){
			if(name === 'root')continue;
			let curPage = home_path[name];
			arr.push(<LinkItem key={count} path={curPage['path']} text={curPage['text']} />);
			count++;
		}

		return arr;
	}

	render(){
		return (
			<div className="home-container">
				{this.getlinkItem()}
			</div>
		);
	}
}

export default Home;