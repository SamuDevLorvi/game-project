# game-project

# trello
[https://trello.com/b/KllBFTgq/game-project](https://trello.com/invite/b/6afed21d191454742a255947/ATTI213fc7241cd5c746ccea2c115a84f401CC488977/game-project)

# google document
https://docs.google.com/document/d/1BwPSF0n1xiKjQk503Q-rdB-YFL-T-FcY2ME_kR8Kxik/edit?tab=t.0


## Desarrollo

Proyecto de Tetris con React, TypeScript y Vite.

El [plan de dependencias y desglose técnico](docs/PLAN_TETRIS.md) contiene las tareas por historia, el orden propuesto, las comprobaciones y el reparto de esta semana.

### Estado actual

Primer incremento de preparación técnica: tablero, formas, pieza activa y vista previa de ejemplo, con validación de posiciones y pruebas. Todavía no hay caída automática, controles, menús ni una partida completa. La historia de generación y caída sigue pendiente de completar.

### Ejecutar

Preparado y comprobado con Node 24.22.3. Las pruebas usan el soporte nativo de TypeScript de Node.

```bash
npm ci
npm run dev
```

### Comprobar

```bash
npm test
npm run lint
npm run build
```

### Siguiente tarea

Añadir el estado inicial real de la partida y el reloj de caída de H5. Se conserva la separación entre el tablero de bloques fijados y la pieza activa.

Se trabaja con una rama y una pull request por historia. La integración en main sigue las revisiones requeridas por el enunciado.
