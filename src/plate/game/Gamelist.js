import React, { Component } from 'react';
import game_list from './data/game-list';
import { Link, Route } from 'react-router-dom';
import './Gamelist.css';


class ListItem extends Component{
	render(){
		return <li><Link to={this.props.link}>{this.props.text}</Link><span className="point-to-right"><i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></span></li>;
	}
}

class List extends Component{
	render(){
		let data = this.props.datalist;
		
		function getList(_data){
			const arr = [];
			let len = _data.length;
			for(let i = 0; i < len; i++){
				let curObj = _data[i];

				arr.push(<ListItem key={i} link={curObj['link']} text={curObj['text']} />);
			}

			return arr;
		}

		return (
			<ul className="game-list-wraper">
				{getList(data)}
			</ul>
		);
	}
}


class Gamelist extends Component{
	render(){
		return (<List datalist={game_list}/>);
	}
}

export default Gamelist;