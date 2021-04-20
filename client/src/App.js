import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './App.css';
import Nav from './components/Nav';

// import Parallax from './components/Parallax';
// import Pic1 from './assets/pic1.jpg';
// import Pic2 from './assets/pic2.jpg';
// import Pic3 from './assets/pic3.jpg';
// import Pic4 from './assets/pic4.jpg';

// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// import Title from './components/ThreeText';
import Box from './components/Box';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Canvas>
				<OrbitControls />
				<Stars />
				<ambientLight intensity={0.5} />
				<spotLight position={[ 10, 15, 10 ]} angle={0.3} />
				<Box />
			</Canvas>
			{/* <Homepage /> */}
			{/* <Parallax image={Pic1} />
			<AboutMe />
			<Parallax image={Pic2} />
			<Portfolio />
			<Parallax image={Pic3} />
			<Contact />
			{/* <Parallax image={Pic4} /> */}
			{/* <Footer /> */}
		</React.Fragment>
	);
}

export default App;
