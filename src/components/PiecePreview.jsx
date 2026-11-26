import { SHAPES } from '../game/pieces.js'

export function PiecePreview({ kind }) {
  const shape = SHAPES[kind]
  return (
    <div
      className="piece-preview"
      style={{ gridTemplateColumns: `repeat(${shape[0].length}, 24px)` }}
      role="img"
      aria-label={`Siguiente pieza: ${kind}`}
    >
      {shape.flatMap((row, y) =>
        row.map((cell, x) => (
          <span
            key={`${x}-${y}`}
            className={cell ? 'cell' : 'preview-empty'}
            data-kind={cell ? kind : undefined}
          />
        )),
      )}
    </div>
  )
}
