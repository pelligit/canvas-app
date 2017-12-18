import React, { Component } from 'react';
import ChildNavTop from '../../page/nav/ChildNavTop';

class ArticleShow extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="文章" link="/article" icon="file-text" text1="文章列表" />
			</div>
		);
	}
}


export default ArticleShow;