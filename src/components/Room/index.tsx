import Model from '../../shared/Model';
import Floor from './Floor';
import Wall from './Wall'



//Profundidad
const WALL_DEPTH = 0.4;

//Largo
const LEFT_WALL_WIDTH = 16;
const RIGHT_WALL_WIDTH = 16;

//Alto
const WALL_HEIGHT = 10;

//Interseccion
const INTERSECTION_GAP = WALL_DEPTH;
const VALOR_RANDON_FRAN = WALL_DEPTH/2;

// Ajuste de la izquierda
const LEFT_WALL_NEW_WIDTH = LEFT_WALL_WIDTH - INTERSECTION_GAP + VALOR_RANDON_FRAN;
const LEFT_WALL_NEW_POSITION = { 
  x: 0, 
  y: WALL_HEIGHT / 2, 
  z: (LEFT_WALL_NEW_WIDTH / 2) + (INTERSECTION_GAP / 2) 
};

// Ajuste de la derecha
const RIGHT_WALL_NEW_WIDTH = RIGHT_WALL_WIDTH + INTERSECTION_GAP - VALOR_RANDON_FRAN;
const RIGHT_WALL_NEW_POSITION = { 
  x: RIGHT_WALL_NEW_WIDTH / 2 - VALOR_RANDON_FRAN, 
  y: WALL_HEIGHT / 2, 
  z: 0 
};

//Rotacion
const LEFT_WALL_ROTATION = { x: 0, y: Math.PI / 2, z: 0 };
const RIGHT_WALL_ROTATION = { x: 0, y: 0, z: 0 };



//Piso
const FLOOR_POSITION = {x:RIGHT_WALL_WIDTH / 2 - 0.001 , y:WALL_DEPTH/2 , z: LEFT_WALL_WIDTH / 2 -0.001}; // ese -0,001 es  para que no se vea parpadeando 

const Room = () => {
  return (
    <>
      <Wall width={LEFT_WALL_NEW_WIDTH} heigth={WALL_HEIGHT} depth={WALL_DEPTH} position={LEFT_WALL_NEW_POSITION} rotation={LEFT_WALL_ROTATION} />
      <Wall width={RIGHT_WALL_NEW_WIDTH} heigth={WALL_HEIGHT} depth={WALL_DEPTH} position={RIGHT_WALL_NEW_POSITION} rotation={RIGHT_WALL_ROTATION} />

      <Model path='/models/desk/covered/scene.gltf' scale={1} position={[1.7, 0.3, 6]} rotation={[0, Math.PI / 2, 0]} />
      <Model path='/models/bed/covered/scene.gltf' scale={0.4} position={[10, 0.1, 4.3]} rotation={[0, 0, 0]} />
      <Model path='/models/plant/scene.gltf' scale={1} position={[1, 3.3, 7.3]} />
      <Model path='/models/coat_hanger/covered/scene.gltf' scale={1.4} position={[2, 0.1, 14]} rotation={[0, 1, 0]}/>
      <Model path='/models/rug/scene.gltf' scale={0.04} position={[11, 0.27, 12]} />

      <Model path='/models/construction_sign/untitled.gltf' scale={1} position={[21.5, 0.27, 15]} rotation={[0, -Math.PI / 2, 0]} />
      <Model path='/models/sign/scene.gltf' scale={1} position={[13, 0.27, 15]} rotation={[0, -Math.PI / 2, 0]} />

      <Floor leftWallWidth={LEFT_WALL_WIDTH  } rightWallWidth={RIGHT_WALL_WIDTH} depth={WALL_DEPTH}   position={FLOOR_POSITION} rotation={{ x: 0, y: 0, z: 0 }} />
    </>
  )
}

export default Room;