import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';

function container(props) {
	return (
		<Container className="container-fluid" fluid style={{ padding: '0px' }}>
			{props.children}
		</Container>
	);
}

export default container;
