function autonomousDrive(store, movements) {
  let row = store.findIndex(s => s.includes('!'));
  let col = store[row].indexOf('!');

  const directions = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, -1],
    D: [0, 1]
  };

  const moveRobot = (dx, dy) => {
    const newRow = row + dy;
    const newCol = col + dx;
    if (
      newRow >= 0 &&
      newRow < store.length &&
      newCol >= 0 &&
      newCol < store[row].length &&
      store[newRow][newCol] !== '*'
    ) {
      [row, col] = [newRow, newCol];
    }
  };

  store[row] = `${store[row].substring(0, col)}.${store[row].substring(col + 1)}`;

  for (const movement of movements) {
    const [dx, dy] = directions[movement];
    moveRobot(dx, dy);
  }

  store[row] = `${store[row].substring(0, col)}!${store[row].substring(col + 1)}`;
  return store;
}

export { autonomousDrive };
