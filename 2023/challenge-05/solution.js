function cyberReindeer(road, time) {
  const barrierOpenTime = 5;
  const snapshots = [road];
  let position = road.indexOf('S');
  let lastChar = '.';

  for (let timeStep = 1; timeStep < time; timeStep++) {
    if (timeStep === barrierOpenTime) road = road.replaceAll('|', '*');

    const nextChar = road[position + 1];
    if (nextChar !== '|' || timeStep >= barrierOpenTime) {
      road = `${road.substring(0, position)}${lastChar}S${road.substring(position + 2)}`;
      lastChar = nextChar;
      position += 1;
    }

    snapshots.push(road);
  }

  return snapshots;
}

function cyberReindeerReguex(road, time) {
  const barrierOpenTime = 5;
  const snapshots = [road];
  let lastChar = '.';

  for (let iteracion = 1; iteracion < time; iteracion++) {
    if (iteracion === barrierOpenTime) road = road.replaceAll('|', '*');

    const matches = road.match(/S[*.]/g);

    if (matches) {
      const [match] = matches;
      road = road.replace(match, `${lastChar}S`);
      const [, newLastChar] = match;
      lastChar = newLastChar;
    }

    snapshots.push(road);
  }

  return snapshots;
}

export { cyberReindeer, cyberReindeerReguex };
