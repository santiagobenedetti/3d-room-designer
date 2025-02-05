import Wall from './Wall'

const WALL_WIDTH = 10;
const WALL_HEIGHT = 10;
const WALL_DEPTH = 0.3;

const LEFT_WALL_POSITION = {x: 0, y: WALL_HEIGHT / 2, z: WALL_WIDTH / 2}
const RIGHT_WALL_POSITION = {x: WALL_WIDTH / 2, y: WALL_HEIGHT / 2, z: 0}
const FLOOR_POSITION = {x: WALL_WIDTH / 2, y: 0, z: WALL_WIDTH / 2}

const LEFT_WALL_ROTATION = {x: 0, y: Math.PI / 2, z: 0}
const RIGHT_WALL_ROTATION = {x: 0, y: 0, z: 0}
const FLOOR_ROTATION = {x: Math.PI / 2, y: 0, z: 0}

const Room = () => {
  return (
    <>
      <Wall width={WALL_WIDTH} heigth={WALL_HEIGHT} depth={WALL_DEPTH} position={LEFT_WALL_POSITION} rotation={LEFT_WALL_ROTATION} />
      <Wall width={WALL_WIDTH} heigth={WALL_HEIGHT} depth={WALL_DEPTH} position={RIGHT_WALL_POSITION} rotation={RIGHT_WALL_ROTATION} />
      <Wall width={WALL_WIDTH} heigth={WALL_HEIGHT} depth={WALL_DEPTH} position={FLOOR_POSITION} rotation={FLOOR_ROTATION} />
    </>
  )
}

export default Room;