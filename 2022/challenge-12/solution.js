function selectSleigh(distance, sleighs) {
  const sleigh = sleighs.filter(x => 20 / x.consumption >= distance).at(-1);
  return sleigh ? sleigh.name : null;
}

export { selectSleigh };
