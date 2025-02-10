import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping, Vector2 } from "three";

const Floor = ({
  leftWallWidth,
  rightWallWidth,
  depth,
}: {
  leftWallWidth: number;
  rightWallWidth: number;
  depth: number;
}) => {
  // Load textures
  const colorMap = useLoader(
    TextureLoader,
    "/textures/WoodPlanks/Wood092_1K-JPG_Color.jpg"
  );
  const normalMap = useLoader(
    TextureLoader,
    "/textures/WoodPlanks/Wood092_1K-JPG_NormalDX.jpg"
  );
  const roughnessMap = useLoader(
    TextureLoader,
    "/textures/WoodPlanks/Wood092_1K-JPG_Roughness.jpg"
  );

  // Configure texture repeating
  colorMap.wrapS = colorMap.wrapT = RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = RepeatWrapping;

  // Adjust repeat value based on your floor size
  colorMap.repeat.set(2, 2);
  normalMap.repeat.set(2, 2);

  return (
    <mesh
      position={[rightWallWidth / 2, 0, leftWallWidth / 2]}
      rotation={[0, 0, 0]}
      receiveShadow
    >
      <boxGeometry args={[rightWallWidth, depth, leftWallWidth]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        normalScale={new Vector2(10, 10)}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
};

export default Floor;
