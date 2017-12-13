import React, { Component } from 'react';
import Nav from '../page/Nav';

import {
  Link
} from 'react-router-dom';


class Case extends Component{
	render(){
		return (
			<div>
				<Nav cur='case' />
			</div>
		);
	}
}

export default Case;