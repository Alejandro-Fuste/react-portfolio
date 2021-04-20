import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box(props) {
	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x += 0.01));

	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="blue" />
		</mesh>
	);
}

export default Box;
