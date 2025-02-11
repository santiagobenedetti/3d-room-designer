import { Vec3 } from "../../shared/Vector";

const Wall = ({
  width,
  heigth,
  depth,
  position,
  rotation,
}: {
  width: number;
  heigth: number;
  depth: number;
  position: Vec3;
  rotation: Vec3;
}) => {
  const skirting = {
    height: 0.4,
    depth: 0.03,
    offset: 0.015,
    bottomLift: 0.15,
  };

  return (
    <group
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      {/* Pared principal */}
      <mesh receiveShadow>
        <boxGeometry args={[width, heigth, depth]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Zócalo inferior */}
      <mesh
        position={[
          0,
          -heigth / 2 + skirting.height / 2 + skirting.bottomLift + depth / 2,
          depth / 2 + skirting.offset,
        ]}
        receiveShadow
      >
        <boxGeometry args={[width, skirting.height, skirting.depth]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>

      {/* Zócalo superior */}
      <mesh
        position={[
          0,
          heigth / 2 - skirting.height / 2,
          depth / 2 + skirting.offset,
        ]}
        receiveShadow
      >
        <boxGeometry args={[width, skirting.height, skirting.depth]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>
    </group>
  );
};

export default Wall;
