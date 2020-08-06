import React from 'react';
import './style.css';

const Parallax = (props) => {
	return (
		<div className="container-fluid" style={{ padding: '0px' }}>
			<div
				className="parallax"
				style={{ backgroundImage: `url(${props.image})`, padding: '0px', width: '100vw' }}
			/>
		</div>
	);
};

export default Parallax;
