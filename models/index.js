// Exporting an object containing all of our models

// module.exports = {
// 	Portfolio: require('./portfolio')
// };

const projects = [
	{
		name: 'Profile Pic',
		description: 'Profile picture for about me section',
		imageLink: 'https://live.staticflickr.com/65535/50137858372_587558f6fe_o.jpg'
	},
	{
		name: 'Poddler',
		description: 'Full-Stack App',
		imageLink: 'https://live.staticflickr.com/65535/50137858387_aee8c9bb1f_o.png',
		deployedLink: 'https://sheltered-gorge-46855.herokuapp.com/',
		repoLink: 'https://github.com/yarocruz/project-2'
	},
	{
		name: 'MVC Burger',
		description: 'MVC, Sequelize, & Handlebars App',
		imageLink: 'https://live.staticflickr.com/65535/50137079753_bc923bb87b_o.png',
		deployedLink: 'https://zep-burger.herokuapp.com/',
		repoLink: 'https://github.com/Alejandro-Fuste/MVC_BurgerApp'
	},
	{
		name: 'MySQL Employee Tracker',
		description: 'NodeJS & MySQL App',
		imageLink: 'https://live.staticflickr.com/65535/50137623286_633bf0207d_o.png',
		repoLink: 'https://github.com/Alejandro-Fuste/MySQL_employee-tracker'
	},
	{
		name: 'ExpressJS Note Taker',
		description: 'ExpressJS App',
		imageLink: 'https://live.staticflickr.com/65535/50137858532_3ce5a7a127_o.png',
		deployedLink: 'https://zepnote-taker.herokuapp.com/',
		repoLink: 'https://github.com/Alejandro-Fuste/ExpressJS_note-taker'
	},
	{
		name: 'TDD Template Engine',
		description: 'NodeJS, Object-Oriented Programming, and Test-Driven Development App',
		imageLink: 'https://live.staticflickr.com/65535/50137623116_613ecf8813_o.png',
		repoLink: 'https://github.com/Alejandro-Fuste/TDD_TemplateEngine'
	},
	{
		name: 'NodeJS README Generator',
		description: 'NodeJS App',
		imageLink: 'https://live.staticflickr.com/65535/50137079623_07ec4291f7_o.png',
		repoLink: 'https://github.com/Alejandro-Fuste/NodeJS_README'
	},
	{
		name: 'Weather Dashboard',
		description: 'AJAX API App',
		imageLink: 'https://live.staticflickr.com/65535/50137623106_7844dc21f9_o.png',
		deployedLink: 'https://alejandro-fuste.github.io/Weather_Dashboard/',
		repoLink: 'https://github.com/Alejandro-Fuste/Weather_Dashboard'
	},
	{
		name: 'Scheduler',
		description: 'Dynamic Javascript App',
		imageLink: 'https://live.staticflickr.com/65535/50137858352_5526d94b84_o.png',
		deployedLink: 'https://alejandro-fuste.github.io/Scheduler/',
		repoLink: 'https://github.com/Alejandro-Fuste/Scheduler'
	},
	{
		name: 'Quiz Game',
		description: 'Javascript jQuery App',
		imageLink: '',
		deployedLink: 'https://alejandro-fuste.github.io/Quiz_Game/',
		repoLink: 'https://github.com/Alejandro-Fuste/Quiz_Game'
	},
	{
		name: 'Password Generator',
		description: 'HTML, CSS, & Javascript App',
		imageLink: 'https://live.staticflickr.com/65535/50137079713_fd3b1620f4_o.png',
		deployedLink: 'https://alejandro-fuste.github.io/Password-Generator/',
		repoLink: 'https://github.com/Alejandro-Fuste/Password-Generator'
	}
];

module.exports = projects;
