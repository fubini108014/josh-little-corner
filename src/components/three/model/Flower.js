import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import flowerGltf from "../../../assets/models/flower.gltf";

export const Flower = forwardRef(({ ...props }, ref) => {
  const { nodes } = useGLTF(flowerGltf);

  return (
    <group {...props} dispose={null} ref={ref}>
      <primitive
        object={nodes.Scene}
        scale={[1, 1, 1]}
        position={[0, -0.2, 0]}
      />
    </group>
  );
});

useGLTF.preload(flowerGltf);

export const EatFlower = forwardRef(() => {
  return (
    <mesh>
      <Flower />
    </mesh>
  );
});
