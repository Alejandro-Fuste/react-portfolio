import React from 'react';
import { Text } from '@react-three/drei';

import './style.css';

function Title() {
	return (
		<Text className="text" material-toneMapped={false}>
			Developer
		</Text>
	);
}

export default Title;
