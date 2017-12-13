import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import paths from '../data/path';

class Nav extends Component{
	constructor(props){
		super(props);

	}

	navlist(){
		const curPage = this.props.cur;
		const arr = [];

		for(let name in paths){
			if(name == curPage){
				continue;
			}

			arr.push(<Link key={name} to={paths[name].path}>{paths[name].text}</Link>);
		}

		return arr;
	}

	render(){
		return (
			<div>
				{this.navlist()}
			</div>
		);
	}
}

export default Nav;