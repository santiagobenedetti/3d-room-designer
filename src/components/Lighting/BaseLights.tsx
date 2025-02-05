import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper, DirectionalLight } from 'three';
import { useRef } from 'react';

const BaseLights = () => {
  const lightRef = useRef<DirectionalLight>(null!);

  useHelper(lightRef, DirectionalLightHelper, 1, 'orange')

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight ref={lightRef} position={[20, 3, 6]} intensity={2} />
    </>
  )
}

export default BaseLights