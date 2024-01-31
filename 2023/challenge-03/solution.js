function findNaughtyStep(original, modified) {
  const [shorter, longer] = [original, modified].sort((a, b) => a.length - b.length);

  return longer.split('').find((char, i) => char !== shorter.charAt(i)) ?? '';
}

export { findNaughtyStep };
