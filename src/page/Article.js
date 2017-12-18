import React, { Component } from 'react';
import ChildNavTop from './nav/ChildNavTop';
import ArticleList from '../plate/article/ArticleList';

class Article extends Component{
	render(){
		return (
			<div>
				<ChildNavTop text="文章" link="/article" icon="file-text" />
				<ArticleList />
			</div>
		);
	}
}

export default Article;