import { Vec3 } from "../../shared/Vector";

const Wall = ({
  width,
  heigth,
  depth,
  position,
  rotation,
  selected,
}: {
  width: number;
  heigth: number;
  depth: number;
  position: Vec3;
  rotation: Vec3;
  selected: boolean;
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

      {selected && (
        <group
          position={[width / 2 + 1, 0, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          {/* Arrow shaft */}
          <mesh>
            <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
            <meshStandardMaterial color="#ff4444" />
          </mesh>
          {/* Arrow head */}
          <mesh position={[0, 1.2, 0]}>
            <coneGeometry args={[0.7, 1, 8]} />
            <meshStandardMaterial color="#ff4444" />
          </mesh>
        </group>
      )}
    </group>
  );
};

export default Wall;
