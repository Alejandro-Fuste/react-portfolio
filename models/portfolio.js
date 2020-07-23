// Require mongoose
const mongoose = require('mongoose');

// Create schema variable
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Enter the name of the stock project'
	},
	description: {
		type: String,
		trim: true
	},
	imageLink: {
		type: String,
		trim: true
	},
	deployedLink: {
		type: String,
		trim: true
	},
	repoLink: {
		type: String,
		trim: true
	}
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
