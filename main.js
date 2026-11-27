const canvas = document.getElementById("game-canvas");

const ctx = canvas.getContext("2d");

const cellSize = 30;

function drawBlock(column, row, color) {
     const x = column * cellSize;
     const y = row * cellSize;

     ctx.fillStyle = color;
     ctx.fillRect(x, y, cellSize, cellSize);
}
const shape = [
     [0, 1, 0],
     [1, 1, 1],
];
for (let row = 0; row < shape.length; row++) {
     for (let column = 0; column < shape[row].length; column++) {
          if (shape[row][column] === 1) {
               drawBlock(column, row, "purple");
          }
     }
}
