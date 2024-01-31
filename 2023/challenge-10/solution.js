function createChristmasTree(ornaments, height) {
  const tree = [];
  let adIndex = 0;
  const maxWidth = 2 * height - 1;

  for (let level = 1; level <= height; level++) {
    let ornamentsInLine = '';
    for (let i = 0; i < level; i += 1) {
      ornamentsInLine += `${ornaments[adIndex % ornaments.length]} `;
      adIndex += 1;
    }
    ornamentsInLine = ornamentsInLine.trim();
    const spaces = ' '.repeat((maxWidth - ornamentsInLine.length) / 2);
    tree.push(spaces + ornamentsInLine);
  }

  tree.push(`${' '.repeat((maxWidth - 1) / 2)}|`);
  return `${tree.join('\n')}\n`;
}

export { createChristmasTree };
