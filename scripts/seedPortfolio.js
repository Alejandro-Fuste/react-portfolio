const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Watchlist collection and inserts the watchlist below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfolio', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

const portfolioSeed = [
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
		name: 'Burger',
		description: 'MVC & Handlebars App',
		imageLink: 'https://live.staticflickr.com/65535/50137079753_bc923bb87b_o.png',
		deployedLink: 'https://zep-burger.herokuapp.com/',
		repoLink: 'https://github.com/Alejandro-Fuste/burger'
	},
	{
		name: 'Employee Tracker',
		description: 'Node & MySQL App',
		imageLink: 'https://live.staticflickr.com/65535/50137623286_633bf0207d_o.png',
		repoLink: 'https://github.com/Alejandro-Fuste/employee-tracker'
	},
	{
		name: 'Note Taker',
		description: 'Express & Heroku App',
		imageLink: 'https://live.staticflickr.com/65535/50137858532_3ce5a7a127_o.png',
		deployedLink: 'https://zepnote-taker.herokuapp.com/',
		repoLink: 'https://github.com/Alejandro-Fuste/note-taker'
	},
	{
		name: 'Template Engine',
		description: 'Node & OPP App',
		imageLink: 'https://live.staticflickr.com/65535/50137623116_613ecf8813_o.png',
		repoLink: 'https://github.com/Alejandro-Fuste/Template_Engine'
	},
	{
		name: 'README Generator',
		description: 'NodeJS App',
		imageLink: 'https://live.staticflickr.com/65535/50137079623_07ec4291f7_o.png',
		repoLink: 'https://github.com/Alejandro-Fuste/Read_Me'
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
		name: 'Password Generator',
		description: 'HTML, CSS, & Javascript App',
		imageLink: 'https://live.staticflickr.com/65535/50137079713_fd3b1620f4_o.png',
		deployedLink: 'https://alejandro-fuste.github.io/Password-Generator/',
		repoLink: 'https://github.com/Alejandro-Fuste/Password-Generator'
	}
];

db.Portfolio
	.remove({})
	.then(() => db.Portfolio.collection.insertMany(portfolioSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
