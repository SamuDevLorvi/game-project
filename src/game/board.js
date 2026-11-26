import { BOARD_HEIGHT, BOARD_WIDTH } from './constants.js'

export function createEmptyBoard() {
  // Cada fila debe ser un array distinto para no compartir sus casillas.
  return Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => null),
  )
}

export function canPlacePiece(board, piece) {
  for (let row = 0; row < piece.shape.length; row += 1) {
    for (let column = 0; column < piece.shape[row].length; column += 1) {
      if (piece.shape[row][column] === 0) continue

      const x = piece.position.x + column
      const y = piece.position.y + row

      if (x < 0 || x >= BOARD_WIDTH || y < 0 || y >= BOARD_HEIGHT) return false
      if (board[y][x] !== null) return false
    }
  }
  return true
}

export function placePiece(board, piece) {
  if (!canPlacePiece(board, piece)) {
    throw new Error('La pieza no puede colocarse en esa posición.')
  }

  const result = board.map((row) => [...row])
  piece.shape.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === 1) {
        result[piece.position.y + rowIndex][piece.position.x + columnIndex] = piece.kind
      }
    })
  })
  return result
}

export function getVisibleBoard(board, activePiece) {
  // La pieza que está cayendo solo se mezcla con el tablero para dibujarla.
  // El tablero de bloques fijados se mantiene separado.
  return activePiece ? placePiece(board, activePiece) : board.map((row) => [...row])
}
