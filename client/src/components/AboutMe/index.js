import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card, { CardText } from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function AboutMe(props) {
	return (
		<Container className="containerAboutMe" fluid>
			<Row>
				<Col md={12}>
					<h2 id="about">About Me</h2>
				</Col>
			</Row>
			<Row className="aboutMeRow">
				<Col md={5}>
					<Card style={{ width: '100%' }}>
						<Card.Body className="picContainer">
							<Image
								src="https://live.staticflickr.com/65535/50137858372_587558f6fe_o.jpg"
								roundedCircle
								alt="profilePic"
								className="profilePic"
							/>
						</Card.Body>
						<Card.Body className="nameContainer">
							<Card.Title className="name">Alejandro Fuste </Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Web Developer | MERN Stack</Card.Subtitle>
						</Card.Body>

						<Card.Body>
							<h5>Skills</h5>
							<Card.Text>
								<ul>
									<li>Test</li>
									<li>Test</li>
								</ul>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={7}>
					<Card style={{ width: '100%' }}>
						<Card.Body>
							<Card.Title>Background</Card.Title>
							<Card.Text>
								I definitely got the coding bug! During a ten-hour workday, I was trying to solve a
								problem I had at work. I was able to solved this problem using the function feature of
								Google Sheets. I would have never thought solving this problem would give me such
								satisfaction. In that moment, I knew that I needed to find out more about coding. I
								continued to find out about coding and programming languages. After completing my first
								Python exercise tutorial, I was hooked; I found my passion. I then completed more Python
								tutorial exercises, but that wasn't enough. I needed to know how it all worked, so I
								moved onto the core web development languages. From there, I became a full-stack web
								developer by completing the web development certificate at the University of Central
								Florida.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default AboutMe;
