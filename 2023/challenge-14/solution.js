function maxGifts(houses) {
  if (houses.length === 1) return houses[0];

  let twoHousesBack = houses[0];
  let oneHouseBack = Math.max(houses[0], houses[1]);
  let currentMax = oneHouseBack;

  for (let i = 2; i < houses.length; i++) {
    currentMax = Math.max(oneHouseBack, twoHousesBack + houses[i]);
    twoHousesBack = oneHouseBack;
    oneHouseBack = currentMax;
  }

  return currentMax;
}

function maxGiftsForOf(houses) {
  let giftsInPrevHouse = houses[0];
  let giftsInSecondPrevHouse = 0;

  for (const giftsInCurrentHouse of houses.slice(1)) {
    const maxGiftsCurrentHouse = Math.max(giftsInPrevHouse, giftsInSecondPrevHouse + giftsInCurrentHouse);
    giftsInSecondPrevHouse = giftsInPrevHouse;
    giftsInPrevHouse = maxGiftsCurrentHouse;
  }

  return giftsInPrevHouse;
}

function maxGiftsAlt(houses) {
  let includeCurrent = 0;
  let excludeCurrent = 0;
  let maxWithoutPrevious;

  for (const giftsInHouse of houses) {
    // maxWithoutPrevious = [excludeCurrent, includeCurrent][+(includeCurrent > excludeCurrent)];
    maxWithoutPrevious = Math.max(excludeCurrent, includeCurrent);
    includeCurrent = excludeCurrent + giftsInHouse;
    excludeCurrent = maxWithoutPrevious;
  }

  return Math.max(excludeCurrent, includeCurrent);
}

export { maxGifts, maxGiftsForOf, maxGiftsAlt };
