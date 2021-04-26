import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

import Logo from '../../assets/AF_logo_3.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function nav() {
	const [ scrolling, setScrolling ] = useState();

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = (e) => {
		if (window.scrollY === 0 && scrolling === true) {
			setScrolling(false);
		} else if (window.scrollY !== 0 && scrolling !== true) {
			setScrolling(true);
		}
	};

	return (
		<Nav>
			<Navbar expand="lg">
				<Navbar.Brand href="#home">
					<img src={Logo} alt="logo" id="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">
							<FontAwesomeIcon icon={faHome} className="icon" />Home
						</Nav.Link>
						<Nav.Link href="#about">
							<FontAwesomeIcon icon={faUser} className="icon" />About
						</Nav.Link>
						<Nav.Link href="#portfolio">
							<FontAwesomeIcon icon={faTh} className="icon" />Portfolio
						</Nav.Link>
						<Nav.Link href="#contact">
							<FontAwesomeIcon icon={faEnvelope} className="icon" />Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Nav>
	);
}

export default nav;
