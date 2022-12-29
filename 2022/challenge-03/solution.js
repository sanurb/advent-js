function distributeGifts(packOfGifts, reindeers) {
  // Calculate the maximum weight limit
  const maxWeight = reindeers.reduce((acc, reindeer) => acc + 2 * reindeer.length, 0);

  // Calculate the total weight of the gift packs
  const currentWeight = packOfGifts.reduce((acc, gift) => acc + gift.length, 0);

  // Divide and floor the result
  return (maxWeight / currentWeight) >> 0;
}

const distributeGiftsAlt = (packOfGifts, reindeers) => {
  // Only valid for numbers between [−2147483648, 2147483647]
  return ((reindeers.join``.length * 2) / packOfGifts.join``.length) | 0;
};

export { distributeGifts, distributeGiftsAlt };
