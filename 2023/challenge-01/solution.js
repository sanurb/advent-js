function findFirstRepeated(gifts) {
  const visited = new Map();
  for (const gift of gifts) {
    if (visited.has(gift)) return gift;
    visited.set(gift, true);
  }
  return -1;
}

function findFirstRepeatedAlt(gifts) {
  let repeatedId = -1;

  gifts.some((gift, i, arr) => {
    if (arr.indexOf(gift) < i) {
      repeatedId = gift;
      return true;
    }
    return false;
  });

  return repeatedId;
}

export { findFirstRepeated, findFirstRepeatedAlt };
