const Floor = ({leftWallWidth, rightWallWidth, depth}: {leftWallWidth: number, rightWallWidth: number, depth: number}) => {
  return (
    <mesh position={[rightWallWidth / 2, 0, leftWallWidth / 2]} rotation={[ 0, 0, 0]}>
      <boxGeometry args={[rightWallWidth, depth, leftWallWidth]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

export default Floor;