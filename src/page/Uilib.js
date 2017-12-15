import React, { Component } from 'react';
import Card from '../ui-lib/Card';
import card_data from '../ui-lib/data/card-data';
import Tab from '../ui-lib/Tab';
import ImgBox from '../ui-lib/ImgBox';
import DropDown from '../ui-lib/DropDown';

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
				{this.cardList()}
				
				<Tab />

				<DropDown />
			</div>
		);
	}
}

export default Uilib;