import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TextField from "../components/TextField";
import Box from "../components/Box";

const Homepage = () => {
  return (
    <>
      <TextField name="Alejandro Fuste" />
      <Canvas style={{ height: "60vh", width: "50vw", right: "-50%" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
    </>
  );
};

export default Homepage;
