import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import List from '../component/List';
import gameName from '../data/game';
import ChildNavTop from './nav/ChildNavTop';
import IntroPannel from '../plate/utils/IntroPannel';
import game_intro from './data/game-intro';
import game_list from './data/game-list';

class ListItem extends Component{
	render(){
		return <li><Link to={this.props.link}>{this.props.text}</Link></li>;
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
			<ul>
				{getList(data)}
			</ul>
		);
	}
}


class Game extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="游戏" link="/game" text1="扫雷" />
				<IntroPannel title={game_intro['title']} content={game_intro['content']} />
				<List datalist={game_list}/>
			</div>
		);
	}
}

export default Game;