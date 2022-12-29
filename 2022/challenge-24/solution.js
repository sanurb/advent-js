function canExit(maze) {
  const wall = Array(maze.length + 2).fill('W');
  maze = [wall, ...maze.map(row => ['W', ...row, 'W']), wall];

  const allowedMoves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  function canReallyExit(paddedMaze, row, col) {
    return (
      paddedMaze[row][col] === 'E' ||
      (paddedMaze[row][col] === ' ' &&
        (paddedMaze[row][col] = '.') &&
        allowedMoves.some(([deltaRow, deltaCol]) => canReallyExit(paddedMaze, row + deltaRow, col + deltaCol)))
    );
  }

  const startRow = maze.findIndex(columns => columns.find(x => x === 'S'));

  const startCol = maze[startRow].findIndex(cell => cell === 'S');

  maze[startRow][startCol] = ' ';

  const boolean = canReallyExit(maze, startRow, startCol);
  return boolean;
}

export { canExit };
