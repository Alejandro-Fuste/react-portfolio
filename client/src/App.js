import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<AboutMe />
				<Portfolio />
				<Contact />
			</div>
		);
	}
}

export default App;
