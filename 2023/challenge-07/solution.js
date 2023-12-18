function drawGift(size, symbol) {
  if (size === 1) return '#\n';

  const totalRows = size * 2 - 2;
  const middleRowIndex = size - 1;
  const rows = [];

  rows[0] = '#'.repeat(size).padStart(size * 2 - 1);
  rows[totalRows] = '#'.repeat(size);
  rows[middleRowIndex] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`;

  for (let rowIndex = 1; rowIndex < middleRowIndex; rowIndex++) {
    const leftPart = `#${symbol.repeat(size - 2)}#`;
    const rightPart = `${symbol.repeat(rowIndex - 1)}#`;
    const draftRow = `${leftPart}${rightPart}`;

    rows[rowIndex] = draftRow.padStart(size * 2 - 1, ' ');
    rows[totalRows - rowIndex] = draftRow;
  }

  return rows.join('\n').concat('\n');
}

export { drawGift };
