import type { Board as BoardData } from '../game/types.ts'

interface BoardProps {
  cells: BoardData
}

export function Board({ cells }: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Tablero de Tetris">
      {cells.map((row, y) => (
        <div className="board-row" role="row" key={y}>
          {row.map((cell, x) => (
            <div
              key={x}
              className="cell"
              data-kind={cell ?? undefined}
              role="gridcell"
              aria-label={`Fila ${y + 1}, columna ${x + 1}: ${cell ?? 'vacía'}`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
