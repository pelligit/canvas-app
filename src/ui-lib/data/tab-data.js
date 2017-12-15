export default [
	{
		title: '日记',
		content: '今天端午节第一天，撸了一天代码，中午午睡了一会，八个小时，成果 http://iReact.cn ，收集好用的react组件，欢迎大家搜索和提交…目前只有150 个项目，希望大家积极提交，pr或者issue都可以…截图如下，手机码字。',
		fn: function(index, title, content){
			console.log('日记');
			// 回调函数，点击该tab的时候发生的事情
			console.log('新闻', index, title, content);
		},
	},
	{
		title: '推荐',
		content: '如果让我推荐，可以看一下 react-web 。它类似 Bootstrap，“小而美”，非常适合中小公司无线业务的快速落地。易上手，功能完备，可以实现普遍的无线应用场景',
		fn: function(index, title, content){
			console.log('推荐');
			console.log('新闻', index, title, content);
		}
	},
	{
		title: '文化',
		content: '某一天开始，该产品方向的Pm老大规划了新功能，决定要新的视觉方案巴拉巴拉，一众Pm 设计 外加我这个前端，努力半天 也没能制订出比antd-V0.11 开放的一系列标准更好的东西，相反比起来很差，做出的东西在交互 设计方面都不及 antd这系列。',
		fn: function(index, title, content){
			console.log('文化');
			console.log('新闻', index, title, content);
		},
	},
	{
		title: '新闻',
		content: '​​​中共中央总书记、国家主席、中央军委主席习近平13日到第71集团军视察。他强调，全军要认真学习贯彻党的十九大精神，深入学习贯彻新时代党的强军思想，贯彻新形势下军事战略方针，坚持政治建军、改革强军、科技兴军、依法治军，聚焦备战打仗，把握集团军建设管理和作战运用特点规律，扎实推进转型建设，全面提高打赢能力，履行好党和人民赋予的新时代使命任务。',
		fn: function(index, title, content, component){
			console.log('新闻', index, title, content, component);
		}
	}
];