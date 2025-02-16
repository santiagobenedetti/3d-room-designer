import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";
import { OrbitControls } from "@react-three/drei";
import BaseLights from "./components/Lighting/BaseLights";
function App() {
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [22, 10, 30], fov: 45 }}>
        <color attach="background" args={["#20202a"]} />
        <BaseLights />
        <Room />

        {/* <axesHelper args={[10]} /> */}
        {/* <gridHelper args={[100, 100]} /> */}

        <OrbitControls
          minAzimuthAngle={-Math.PI / 128}
          maxAzimuthAngle={Math.PI / 2.15}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          enableZoom={true}
          minDistance={10}
          maxDistance={50}
        />
      </Canvas>
    </>
  );
}

export default App;
