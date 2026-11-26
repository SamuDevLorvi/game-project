import { BOARD_WIDTH } from './constants.js'

// Las mismas formas iniciales de la definición del proyecto.
export const SHAPES = {
  I: [[1, 1, 1, 1]],
  O: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1]],
  S: [[0, 1, 1], [1, 1, 0]],
  Z: [[1, 1, 0], [0, 1, 1]],
  J: [[1, 0, 0], [1, 1, 1]],
  L: [[0, 0, 1], [1, 1, 1]],
}

export function createPiece(kind) {
  const shape = SHAPES[kind].map((row) => [...row])
  return {
    kind,
    shape,
    position: {
      x: Math.floor((BOARD_WIDTH - shape[0].length) / 2),
      y: 0,
    },
  }
}
