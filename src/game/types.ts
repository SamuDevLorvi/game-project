export type PieceKind = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L'
export type Cell = PieceKind | null
export type Board = Cell[][]
export type Shape = ReadonlyArray<ReadonlyArray<0 | 1>>

export interface Position {
  x: number
  y: number
}

export interface ActivePiece {
  kind: PieceKind
  shape: Shape
  position: Position
}

export type GameStatus = 'menu' | 'controls' | 'countdown' | 'playing' | 'paused' | 'gameover'
