function createCube(size) {
  const head = [];
  const tail = [];
  for (let i = 1; i <= size; i++) {
    head.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size));
    tail.push(' '.repeat(i - 1) + '\\/'.repeat(size - (i - 1)) + '_/'.repeat(size));
  }
  return [...head, ...tail].join('\n');
}

export { createCube };
