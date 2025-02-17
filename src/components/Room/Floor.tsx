import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping, Vector2 } from "three";
import { Vec3 } from "../../shared/Vector";


const Floor = ({
  leftWallWidth,
  rightWallWidth,
  depth,
  position,
  rotation,
}: {
  leftWallWidth: number;
  rightWallWidth: number;
  depth: number;
  position: Vec3;
  rotation: Vec3;
}) => {
  // Load textures
  const colorMap = useLoader(
    TextureLoader,
    "textures/WoodPlanks/Wood092_1K-JPG_Color.jpg"
  );
  const normalMap = useLoader(
    TextureLoader,
    "textures/WoodPlanks/Wood092_1K-JPG_NormalDX.jpg"
  );
  const roughnessMap = useLoader(
    TextureLoader,
    "textures/WoodPlanks/Wood092_1K-JPG_Roughness.jpg"
  );

  // Configure texture repeating
  colorMap.wrapS = colorMap.wrapT = RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = RepeatWrapping;

  // Adjust repeat value based on your floor size
  colorMap.repeat.set(2, 2);
  normalMap.repeat.set(2, 2);

  return (
    <group
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <mesh receiveShadow>
        <boxGeometry args={[rightWallWidth, depth, leftWallWidth]} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          normalScale={new Vector2(10, 10)}
          roughnessMap={roughnessMap}
        />
      </mesh>
    </group>
  );
};

export default Floor;

