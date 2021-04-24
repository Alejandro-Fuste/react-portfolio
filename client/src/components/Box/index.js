import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box(props) {
	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x += 0.01));

	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" scale={[ 4, 5, 6 ]} />
			<meshLambertMaterial attach="material" color="#d9b377" />
		</mesh>
	);
}

export default Box;
