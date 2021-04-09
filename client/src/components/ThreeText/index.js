import React from 'react';
import { Text } from '@react-three/drei';

import './style.css';

function Title({ name }) {
	return (
		<Text className="text" material-toneMapped={false}>
			{name}
		</Text>
	);
}

export default Title;
