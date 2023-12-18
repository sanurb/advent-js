function maxDistance(movements) {
  let distance = 0;
  let wildcards = 0;

  for (const sign of movements) {
    distance += (sign === '>') - (sign === '<');
    wildcards += sign === '*';
  }

  return Math.abs(distance) + wildcards;
}

export { maxDistance };
