import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";
import { OrbitControls } from "@react-three/drei";
import BaseLights from "./components/Lighting/BaseLights";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          background: "rgba(72, 72, 94, 0.8)",
          padding: "10px 20px",
          borderRadius: "8px",
          color: "white",
          fontFamily: "Arial, sans-serif",
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>3D Room Creator</h1>
        <p style={{ fontSize: "14px" }}>
          This is a 3D room creator to help you design your room.
        </p>
        <p style={{ fontSize: "14px" }}>
          It allows you to explore a 3D model of a room in real-time and share it with your friends.
        </p>
      </div>

      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "rgba(38, 38, 49, 0.8)",
        padding: "10px 20px",
        borderRadius: "8px",
        color: "white",
        fontFamily: "Arial, sans-serif",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
      }}>
        <p style={{ fontSize: "14px" }}>
          Designed by <a style={{color: "white", fontWeight: 'bold'}} href="https://github.com/santiagobenedetti" target="_blank" rel="noopener noreferrer">Santiago Benedetti </a>
          and <a style={{color: "white", fontWeight: 'bold'}} href="https://github.com/FranciscoAnnoni" target="_blank" rel="noopener noreferrer">Francisco Annoni</a>
        </p>
      </div>

      <Canvas shadows dpr={[1, 2]} camera={{ position: [22, 10, 30], fov: 45 }}>
        <color attach="background" args={["#20202a"]} />
        <BaseLights />
        <Room />

        {/* <axesHelper args={[10]} /> */}
        {/* <gridHelper args={[100, 100]} /> */}

        <OrbitControls
          minAzimuthAngle={Math.PI / 20}
          maxAzimuthAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          enableZoom={true}
          minDistance={10}
          maxDistance={50}
        />
      </Canvas>
    </>
  );
}

export default App;
