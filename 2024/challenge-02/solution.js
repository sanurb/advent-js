/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const paddingSpaces = 1;
  const borderWidth = 2;

  const longestNameLength = Math.max(...names.map(name => name.length));
  const totalFrameWidth = longestNameLength + paddingSpaces * 2 + borderWidth;

  const topAndBottomBorder = '*'.repeat(totalFrameWidth);
  const framedNames = names.map(name => {
    const paddedName = name.padEnd(longestNameLength + paddingSpaces);
    return `* ${paddedName}*`;
  });

  return [topAndBottomBorder, ...framedNames, topAndBottomBorder].join('\n');
}

export { createFrame };
