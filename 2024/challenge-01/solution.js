/**
 * Prepares an array of gifts by removing duplicates and sorting them in ascending order.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * @param {number[]} gifts - Array of integers representing the gifts.
 * @returns {number[]} A sorted array with duplicates removed.
 */
function prepareGifts(gifts) {
  const unique = gifts.reduce((acc, val) => {
    acc[val] = val;
    return acc;
  }, {});
  return Object.values(unique).sort((a, b) => a - b);
}

export { prepareGifts };
