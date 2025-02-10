import { Canvas } from '@react-three/fiber';
import Room from './components/Room';
import { OrbitControls } from '@react-three/drei';
import BaseLights from './components/Lighting/BaseLights';
function App() {

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [30, 10, 30], fov: 45  }}>
        <color attach="background" args={['#202020']} />
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


