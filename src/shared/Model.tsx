import * as React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export type ModelProps = {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

/**
 * Model component props
 *
 * @param {path} string - Path to the gltf model file
 * @param {position} array '[number, number, number]' - Position of the model
 * @param {rotation} array '[number, number, number]' - Rotation of the model
 * @param {scale} number - Scale of the model
 */
const Model = ({ path, position, rotation, scale }: ModelProps) => {
  // const {nodes, materials} = useGLTF(path);
  // console.log(nodes, materials);
  const gltf = useLoader(GLTFLoader, path);

  // Traverse the scene and enable shadows for all meshes
  React.useEffect(() => {
    gltf.scene.traverse((child) => {
      if ("isMesh" in child) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);
  console.log(gltf);

  return (
    // <mesh
    //   position={position}
    //   scale={scale}
    //   rotation={rotation}
    //   castShadow
    //   receiveShadow
    //   geometry={nodes.Drawer.geometry}
    //   material={materials['Glossy.003']}
    //   dispose={null}
    // />
    <primitive
      object={gltf.scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

export default Model;
