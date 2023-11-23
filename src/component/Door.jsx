import { useTexture } from "@react-three/drei";
import { useRef } from "react";

// import { useControls } from "leva";
export default function Door(props) {
  const geo = useRef();
  const textures = useTexture({
    alphaMap: "./textures/door/alpha.jpg",
    // aoMap: "./textures/door/ambientOcclusion.jpg",
    map: "./textures/door/color.jpg",
    displacementMap: "./textures/door/height.jpg",
    // displacementScale: 1,
    metalnessMap: "./textures/door/metalness.jpg",
    normalMap: "./textures/door/normal.jpg",
    roughnessMap: "./textures/door/roughness.jpg",
  });

  return (
    <mesh rotation={props.rotation} position={props.position} receiveShadow>
      <planeGeometry ref={geo} args={props.args} receiveShadow>
        {/* <bufferAttribute
          attach={["uv2"]}
          array={geo.current.attributes.uv.array}
          itemSize={2}
        /> */}

        {/* {console.log(geo)} */}
      </planeGeometry>

      <meshStandardMaterial transparent={true} {...textures} />
    </mesh>
  );
}
