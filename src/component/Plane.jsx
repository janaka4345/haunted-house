import { useTexture } from "@react-three/drei";

// import { useControls } from "leva";
export default function Plane(props) {
  const textures = useTexture({
    map: "./textures/grass/color.jpg",
    normalMap: "./textures/grass/normal.jpg",
    roughnessMap: "./textures/grass/roughness.jpg",
  });
  return (
    <mesh rotation={props.rotation} position={props.position} receiveShadow>
      <planeGeometry args={props.args} receiveShadow />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
}
