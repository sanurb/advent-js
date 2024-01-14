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

function maxGiftsAlt(houses) {
  let giftsInPrevHouse = houses[0];
  let giftsInSecondPrevHouse = 0;

  for (const giftsInCurrentHouse of houses.slice(1)) {
    const maxGiftsCurrentHouse = Math.max(giftsInPrevHouse, giftsInSecondPrevHouse + giftsInCurrentHouse);
    giftsInSecondPrevHouse = giftsInPrevHouse;
    giftsInPrevHouse = maxGiftsCurrentHouse;
  }

  return giftsInPrevHouse;
}

export { maxGifts, maxGiftsAlt };
