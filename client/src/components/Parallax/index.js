import React from 'react';
import Style from './style.css';

const Parallax = (props) => {
	return <div className="parallax" style={{ backgroundImage: `url(${props.image})` }} />;
};

export default Parallax;
