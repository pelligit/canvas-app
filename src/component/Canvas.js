import React, { Component } from 'react';
import page from '../lib/page';
import Draw from '../lib/draw';

// -------------------------------
const size = page.size();
let w = size.width;
let h = size.height;

console.log(size, page);

function canvasElem(w, h, idVal){
	let elem = <canvas id={idVal} width={w} height={h}></canvas>;

	return elem;
}

// -----------------------------
class Canvas extends Component{
	// Mounting
	// These methods are called when an instance of a component is being created and inserted into the DOM:
	// constructor()
	// componentWillMount()
	// render()
	// componentDidMount()
	
	// Updating
	// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:
	// componentWillReceiveProps()
	// shouldComponentUpdate()
	// componentWillUpdate()
	// render()
	// componentDidUpdate()
	
	// Unmounting
	// This method is called when a component is being removed from the DOM:
	// componentWillUnmount()
	
	// Error Handling
	// This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
	// componentDidCatch()
	
	// Other APIs
	// Each component also provides some other APIs:
	
	// setState()
	// forceUpdate()
	
	// Class Properties
	// defaultProps
	// displayName
	
	// Instance Properties
	// props
	// state

	constructor(props){
		super(props);

		let index = (Math.random()*1000)|0;
		
		this.state = {
			idValue: 'my_canvas_' + index
		};
	}

	render(){
		// 只能通过this.props和this.state访问数据
		// 可以返回null、false或任何React组件
		// 只能出现一个顶级组件（不能返回数组）
		// 不能改变组件的状态
		// 不能修改DOM的输出
		
		return (
			<div>{ canvasElem(w, h, this.state.idValue) }</div>
		);
		
	}

	componentWillMount(){
		console.log('将要挂载');
	}

	componentDidMount(){
		console.log('挂载完成');
		let idVal = this.state.idValue;
		const c = document.getElementById(idVal);
		const ctx = c.getContext('2d');

		let pen = new Draw(ctx, c);
		pen.circle(100, 100, 40);

		// console.log(ctx);

		// ctx.arc(200, 200, 50, 0, Math.PI * 2, true);
		// ctx.stroke();
	}

	componentWillReceiveProps(){
		console.log('组件接收到新的props的时候调用');
	}

	shouldComponentUpdate(){
		console.log('接收到新的state或者props，将要渲染之前调用');
	}

	componentWillUpdate(){
		console.log('在接收到新的props或者state的时候调用');
	}

	componentDidUpdate(){
		console.log('在组件的更新已经同步到DOM中后调用');
	}

	componentWillUnmount(){
		console.log('组件将要卸载的时候调用');
	}


	// getDefaultProps(){

	// }
	// getDefaultProps
	// getInitialState
	// componentWillMount
	// render
	// componentDidMount
	// 实例化完成后的更新

	// getInitialState
	// componentWillMount
	// render
	// componentDidMount
	// 存在期
	// 组件已存在时的状态改变

	// componentWillReceiveProps
	// shouldComponentUpdate
	// componentWillUpdate
	// render
	// componentDidUpdate
	// 销毁&清理期
	// componentWillUnmount
}

export default Canvas;