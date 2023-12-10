function findFirstRepeated(gifts) {
  const visited = new Map();
  for (const gift of gifts) {
    if (visited.has(gift)) return gift;
    visited.set(gift, true);
  }
  return -1;
}

export { findFirstRepeated };
