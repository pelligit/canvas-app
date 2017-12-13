class Page{
	constructor(){}

	size(){
		return {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}
}

export default new Page();