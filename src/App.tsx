import { Canvas } from '@react-three/fiber';
import Room from './components/Room';
import { OrbitControls } from '@react-three/drei';
import BaseLights from './components/Lighting/BaseLights';
function App() {

  return (
    <>
      <Canvas>
        <BaseLights />
        <Room />

        <axesHelper args={[10]} />
        <gridHelper args={[100, 100]} />
        
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App


