class Draw{
	constructor(ctx, c){
		this.ctx = ctx;
		this.canvas = c;
		this.width = c.width;
		this.height = c.height;
	}

	// 画一个圆
	circle(x, y, r){
		this.ctx.save();
		this.ctx.arc(x, y, r, 0, Math.PI * 2, true);
		this.ctx.stroke();
		this.ctx.restore();
	}
}

export default Draw;