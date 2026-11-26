import { Board } from './components/Board.jsx'
import { PiecePreview } from './components/PiecePreview.jsx'
import { createEmptyBoard, getVisibleBoard } from './game/board.js'
import { createPiece } from './game/pieces.js'
import './App.css'

// Primer punto de comprobación: tablero y piezas visibles.
// La caída y los controles se añadirán en los siguientes pasos de la rama.
const settledBoard = createEmptyBoard()
const activePiece = createPiece('T')

export default function App() {
  return (
    <main className="app">
      <h1>Tetris</h1>
      <div className="game-layout">
        <Board cells={getVisibleBoard(settledBoard, activePiece)} />
        <aside className="sidebar" aria-label="Información de la partida">
          <dl className="scoreboard">
            <div><dt>Puntos</dt><dd>0</dd></div>
            <div><dt>Líneas</dt><dd>0</dd></div>
            <div><dt>Nivel</dt><dd>1</dd></div>
          </dl>
          <h2>Siguiente pieza</h2>
          <PiecePreview kind="L" />
        </aside>
      </div>
    </main>
  )
}
