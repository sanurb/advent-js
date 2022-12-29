function getFilesToBackup(lastBackup, changes) {
  const filtered = changes.filter(x => x[1] > lastBackup);
  const ids = filtered.map(x => x[0]);
  const sorted = ids.sort((a, b) => a - b);
  const flated = [...new Set(sorted)];

  return flated;
}

export { getFilesToBackup };
