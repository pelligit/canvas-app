import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component{
	constructor(props){
		super(props);

		this.state = {
			count: 0,
			second: '00',
			minute: '00',
			hour: '00'
		};

		// 事件和定时器会改变this的指向
		// 所以这里将该组件绑定到这些方法上
		// 防止在定时器或者事件中this指向到别的地方
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);
		this.refresh = this.refresh.bind(this);

		this.timer = null;
		this.running = false;
	}

	render(){
		return (
			<div className="my-clock">
				<span className="hour-contianer">{this.state.hour}:</span>
				<span className="minute-contianer">{this.state.minute}:</span>
				<span className="second-contianer">{this.state.second}</span>
				<span className="start-clock clock-btn" onClick={this.start}>开始</span>
				<span className="stop-clock clock-btn" onClick={this.stop}>停止</span>
				<span className="reset-clock clock-btn" onClick={this.reset}>重置</span>
			</div>
		);
	}

	// 更新状态
	refresh(){
		let s = this.state.second/1;
		let m = this.state.minute/1;
		let h = this.state.hour/1;

		s = s + 1;
		if(s < 10){
			s = '0' + s;
		}

		if(s >= 60){
			s = '00';
			m = m + 1;
		}

		if(m < 10){
			m = '0' + m;
		}

		if(m >= 60){
			m = '00';
			h = h + 1;
		}

		if(h < 10){
			h = '0' + h;
		}

		if(h >= 24){
			h = '00';
		}

		this.setState({
			second: s,
			minute: m,
			hour: h
		});
	}

	// 开始计时
	start(){
		if(!this.running){
			let _this = this;
			this.timer = setInterval(this.refresh, 1000);
			this.running = true;
		}
	}

	// 停止计时
	stop(){
		clearInterval(this.timer);
		this.running = false;
	}

	// 重置计时器
	reset(){
		this.setState({
			second: '00',
			minute: '00',
			hour: '00'
		});
	}

	componentDidMount(){
		this.start();
	}
}

export default Clock;