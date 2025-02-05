import { Vec3 } from '../../shared/Vector';

const Wall = ({
  width,
  heigth,
  depth,
  position,
  rotation
}: {
  width: number, heigth: number, depth: number, position: Vec3, rotation: Vec3}) => {
  return (
    <mesh position={[position.x, position.y, position.z]} rotation={[rotation.x, rotation.y, rotation.z]}>
      <boxGeometry args={[width, heigth, depth]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

export default Wall;