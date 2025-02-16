// import { useHelper } from '@react-three/drei';
import { DirectionalLight } from 'three';
import { useRef } from 'react';

const BaseLights = () => {
  const lightRef = useRef<DirectionalLight>(null!);
  const lightRef2 = useRef<DirectionalLight>(null!);

  // useHelper(lightRef, DirectionalLightHelper, 1, '#ffd5ab')
  // useHelper(lightRef2, DirectionalLightHelper, 1, '#ffc58f')

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight ref={lightRef} position={[6 , 5, 20]} intensity={0.8} castShadow color="#ffd5ab" />
      <directionalLight ref={lightRef2} position={[20 , 5, 15]} intensity={0.8} castShadow color="#ffc58f" />
    </>
  )
}

export default BaseLights