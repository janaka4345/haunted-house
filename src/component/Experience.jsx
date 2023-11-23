import { useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
// import { useControls } from "leva";
import Plane from "./Plane";
import Sphere from "./Sphere";
import Box from "./Box";
import Door from "./Door";

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 6, 14], fov: 42 }}>
      {/* <PerspectiveCamera makeDefault position= {[0, 0, 15]} fov={45} /> */}
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[0, 15, 15]} castShadow />
      <pointLight
        intensity={10}
        position={[0, 1, 3]}
        color={"red"}
        castShadow
      />
      <OrbitControls />
      <Sphere />
      <Plane
        rotation={[5, 0, 0]}
        position={[0, -2, 0]}
        args={[10, 10, 10, 10]}
        color="yellowgreen"
      />
      <Door
        rotation={[0, 0, 0]}
        position={[0, 2, -2]}
        args={[10, 10, 100, 100]}
      />
      <Box position={[1, 1, 0]} />
    </Canvas>
  );
}
