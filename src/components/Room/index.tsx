import Model from '../../shared/Model';
import Floor from './Floor';
import Wall from './Wall'

const WALL_DEPTH = 0.3;

const LEFT_WALL_WIDTH = 13;
const RIGHT_WALL_WIDTH = 15;
const WALL_HEIGHT = 10;

const LEFT_WALL_POSITION = {x: 0, y: WALL_HEIGHT / 2, z: LEFT_WALL_WIDTH / 2}
const RIGHT_WALL_POSITION = {x: RIGHT_WALL_WIDTH / 2, y: WALL_HEIGHT / 2, z: 0}

const LEFT_WALL_ROTATION = {x: 0, y: Math.PI / 2, z: 0}
const RIGHT_WALL_ROTATION = {x: 0, y: 0, z: 0}

const Room = () => {
  return (
    <>
      <Wall width={LEFT_WALL_WIDTH} heigth={WALL_HEIGHT} depth={WALL_DEPTH} position={LEFT_WALL_POSITION} rotation={LEFT_WALL_ROTATION} />
      <Wall width={RIGHT_WALL_WIDTH} heigth={WALL_HEIGHT} depth={WALL_DEPTH} position={RIGHT_WALL_POSITION} rotation={RIGHT_WALL_ROTATION} />

      <Model path='/models/desk/scene.gltf' scale={1} position={[1.5, 3, 6]} rotation={[0, Math.PI / 2, 0]} />
      <Model path='/models/bed/scene.gltf' scale={0.4} position={[10, 1.1, 4.3]} rotation={[0, 0, 0]} />
      <Model path='/models/plant/scene.gltf' scale={1} position={[1, 3, 7.3]} />

      <Floor leftWallWidth={LEFT_WALL_WIDTH} rightWallWidth={RIGHT_WALL_WIDTH} depth={WALL_DEPTH} />
    </>
  )
}

export default Room;