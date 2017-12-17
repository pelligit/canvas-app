import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ChildNavTop.css';

class ChildNavTop extends Component{
	render(){
		let _this = this;

		function firstLevel(){
			const arr = [];
			if(_this.props.text && _this.props.text.length !== 0){
				arr.push(<span key="leve1-span"><i className="fa fa-angle-right"></i></span>);

				if(_this.props.link && _this.props.link.length !== 0){
					arr.push(<span key="leve1-text"><Link to={_this.props.link}>{_this.props.text}</Link></span>);
				}else{
					arr.push(<span key="leve1-text">{_this.props.text}</span>);
				}

				return arr;
			}else{
				return '';
			}
		}

		function twoLevel(){
			const arr = [];
			if(_this.props.text1 && _this.props.text1.length !== 0){
				arr.push(<span key="leve1-span"><i className="fa fa-angle-right"></i></span>);
				arr.push(<span key="leve1-text">{_this.props.text1}</span>);

				return arr;
			}else{
				return '';
			}
		}

		return (
			<div className="child-nav-top">
				<span><Link to="/"><i className="fa fa-home fa-fw"></i>首页</Link></span>
				{firstLevel()}
				{twoLevel()}
			</div>
		);
	}
}

export default ChildNavTop;