function adjustLights(lights) {
  let expectedColor = lights[0];
  let changesNeeded = 0;

  for (const light of lights) {
    changesNeeded += light !== expectedColor;
    expectedColor = expectedColor === '🔴' ? '🟢' : '🔴';
  }

  return Math.min(changesNeeded, lights.length - changesNeeded);
}

function adjustLightsUsingColorMap(lights) {
  const colorMap = { '🔴': '🟢', '🟢': '🔴' };
  let expectedColor = lights[0];
  let changesNeeded = 0;

  for (const light of lights) {
    changesNeeded += light !== expectedColor;
    expectedColor = colorMap[expectedColor];
  }

  return Math.min(changesNeeded, lights.length - changesNeeded);
}

function adjustLightsByPatternCalculation(lights) {
  const [red, green] = ['🔴', '🟢'];
  let changesForRedStart = 0;
  let changesForGreenStart = 0;

  lights.forEach((light, i) => {
    const expectedColor = i % 2 === 0 ? red : green;
    changesForRedStart += light !== expectedColor;
    changesForGreenStart += light === expectedColor;
  });

  return Math.min(changesForRedStart, changesForGreenStart);
}

export { adjustLights, adjustLightsUsingColorMap, adjustLightsByPatternCalculation };
