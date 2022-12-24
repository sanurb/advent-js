function distributeGifts(packOfGifts, reindeers) {
  // Calculate the maximum weight limit
  const maxWeight = reindeers.reduce((acc, reindeer) => acc + 2 * reindeer.length, 0);

  // Calculate the total weight of the gift packs
  const currentWeight = packOfGifts.reduce((acc, gift) => acc + gift.length, 0);

  // Divide and floor the result
  return (maxWeight / currentWeight) >> 0;
}

export { distributeGifts };
