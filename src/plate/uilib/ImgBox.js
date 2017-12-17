// 不完美的组件
// 还有待进一步优化

import React, { Component } from 'react';
import './ImgBox.css';
import img_box_data from './data/imgbox-data';

// 单个图片
class ImgItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			width: '100%',
			height: 120,
			left: 0,
			top: 0,
			boxWidth: '100%',
			boxHeight: 120
		};

		this.boxRatio = this.state.boxWidth/this.state.boxHeight;
	}

	render(){
		return (
			<div className="img-box-container" style={{ width: this.state.boxWidth, height: this.state.boxHeight }}>
				<img width={this.state.width} height={this.state.height} className="img-box-img" src={this.props.src} />
				<div style={{left: this.state.left, bottom: 0}} className="img-box-imginfo">{this.props.text}</div>
			</div>
		);
	}

	componentDidMount(){
		let _this = this;
		let img = new Image();
		img.src = this.props.src;
		img.onload = function(){
			console.log('加载完成', img.width, img.height);
			let w = img.width;
			let h = img.height;
			let _w, _h, _l, _t;

			let ratio = w/h;

			if(ratio > _this.boxRatio){
				_w = _this.state.width;
				_h = _w/ratio;
				_l = 0;
				_t = (_this.state.boxHeight - _h)/2;
			}else{
				_h = _this.state.height;
				_w = _h * ratio;
				_t = 0;
				_l = (_this.state.boxWidth - _w)/2
			}

			_this.setState({
				width: _w,
				height: _h,
				left: _l,
				top: _t
			});
		};
	}
}

class ImgBox extends Component{
	render(){
		function imgs(){
			const arr = [];
			const len = img_box_data.length;
			for(let i = 0; i < len; i++){
				arr.push(<ImgItem key={i} text={img_box_data[i]['text']} src={img_box_data[i]['src']} />);
			}

			return arr;
		}

		return (
			<div>
				{imgs()}
			</div>
		);
	}
}

export default ImgBox;