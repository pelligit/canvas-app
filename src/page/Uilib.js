import React, { Component } from 'react';
import Card from '../plate/uilib/Card';
import card_data from '../plate/uilib/data/card-data';
import Tab from '../plate/uilib/Tab';
import ImgBox from '../plate/uilib/ImgBox';
import DropDown from '../plate/uilib/DropDown';
import drop_down_data from '../plate/uilib/data/drop-down-data';
import ChildNavTop from './nav/ChildNavTop';
// import tab_data from '../ui-lib/data/tab-data';

class Uilib extends Component{
	cardList(){
		const arr = [];
		let len = card_data.length;
		for(let i = 0; i < len; i++){
			arr.push(<Card key={i} title={card_data[i]['title']} content={card_data[i]['content']} author={card_data[i]['author']} time={card_data[i]['time']} />);
		}

		return arr;
	}

	render(){

		return (
			<div>
				<ChildNavTop text="react组件" link="/uilib" icon="tasks" />
				{this.cardList()}
				
				<Tab />

				<DropDown title={drop_down_data['title']} name={drop_down_data['name']} />
			</div>
		);
	}
}

export default Uilib;