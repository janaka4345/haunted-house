import { useTexture } from "@react-three/drei";

// import { useControls } from "leva";
export default function Box(props) {
  const textures = useTexture({
    // alphaMap: "./textures/bricks/alpha.jpg",
    // aoMap: "./textures/bricks/ambientOcclusion.jpg",
    map: "./textures/bricks/color.jpg",
    // displacementMap: "./textures/bricks/height.jpg",
    // displacementScale: 1,
    // metalnessMap: "./textures/bricks/metalness.jpg",
    normalMap: "./textures/bricks/normal.jpg",
    roughnessMap: "./textures/bricks/roughness.jpg",
  });
  return (
    <mesh position={props.position}>
      <boxGeometry args={[2, 2, 2, 1, 1, 1]} castShadow />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
}
