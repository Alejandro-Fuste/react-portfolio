import React from 'react';
// import { Canvas } from '@react-three/fiber';

function Box(props) {
	return (
		<mesh>
			<boxBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="blue" />
		</mesh>
	);
}
