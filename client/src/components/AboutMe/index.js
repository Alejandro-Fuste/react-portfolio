import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

function AboutMe(props) {
	return (
		<Container className="container-fluid" fluid>
			<Row>
				<Col md={12}>
					<div className="aboutMe" id="me">
						<h2 id="about">About Me</h2>
						<p>
							Hi, I’m Alejandro Fuste. I am a certified athletic trainer and teacher in Orlando, Florida.
							<img
								src="https://live.staticflickr.com/65535/50137858372_587558f6fe_o.jpg"
								width="152"
								height="216"
								alt="profilePic"
								className="profilePic"
							/>
							<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8" /> Although I
							am passionate about athletic training and teaching, I have developed an urge for computer
							programming that can not be satisfied with my current career. This passion was developed
							from finding solutions to problems that arose from my job. For example, at my job, we
							collect forms that are only good for one calendar year. I needed to find a way to know a
							month before the form would expire and which forms had already expired. I was able to use
							the date function in google sheets to do for all of our athletes forms. Finding a solution
							to this problem was extremely gratifying, and it sparked my curiosity for coding. Since that
							day, I started to learn as much as I could about coding. Along this journey, I discovered
							and enrolled in the full-stack web developer bootcamp at the University of Central Florida.
						</p>

						<p className="p2">
							This portfolio contains the work that I have recently completed in the coding bootcamp. We
							started the bootcamp with the basics of front-end development such as HTML, CSS, Git, and
							Github. As we have progressed, we then moved on to Javascript, JQuery, DOM Manipulation, and
							AJAX. The portfolio section of this website contains some of my latest work. This section
							reflects my chronological progression through the course, so as your scroll to the right you
							will work that was completed earlier in the program.
						</p>

						<p className="p3">
							Finally, what I want you get from my portfolio is to not only get a sense of my skills, but
							to also to understand that I love everything about coding. I love the front-end and the
							back-end of web development. I could easily spend all-day working on a project or trying to
							find and resolve a bug. That’s what I want you to know...I love this stuff!
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default AboutMe;
