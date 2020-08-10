import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer>
			<Nav>
				<Navbar className="footerNav" expand="lg">
					<Nav.Link href="https://www.linkedin.com/in/alejandro-fuste" style={{ color: 'black' }}>
						<FontAwesomeIcon icon={faLinkedin} className="icon" />
					</Nav.Link>
					<Nav.Link href="https://github.com/Alejandro-Fuste" style={{ color: 'black' }}>
						<FontAwesomeIcon icon={faGithubSquare} className="icon" />
					</Nav.Link>
					<Nav.Link
						href="https://docs.google.com/document/d/1J-eHbCJ78Uu1bNrdrXxp_oaAK79_eaCkwrfItbw5cl0/edit?usp=sharing"
						style={{ color: 'black' }}
					>
						<FontAwesomeIcon icon={faGoogleDrive} className="icon" />
					</Nav.Link>
				</Navbar>
			</Nav>
		</footer>
	);
};

export default Footer;
