import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import paths from '../data/path';
import './Nav.css';

class Nav extends Component{
	constructor(props){
		super(props);

	}

	navlist(){
		const curPage = this.props.cur;
		const arr = [];

		for(let name in paths){
			if(name === curPage){
				continue;
			}

			arr.push(<span key={name}><Link to={paths[name].path}>{paths[name].text}</Link></span>);
		}

		return arr;
	}

	render(){
		return (
			<div className="nav-container">
				<div className="page-nage">
					{this.navlist()}
				</div>
			</div>
		);
	}
}

export default Nav;