function organizeGifts(gifts) {
  const PALLET_SIZE = 50;
  const BOX_SIZE = 10;

  let result = '';

  for (const match of gifts.match(/\d+[a-z]/g)) {
    const amount = +match.slice(0, -1);
    const type = match.at(-1);

    const pallets = Math.floor(amount / PALLET_SIZE);
    const boxes = Math.floor((amount % PALLET_SIZE) / BOX_SIZE);
    const bags = amount % BOX_SIZE;

    result += `[${type}]`.repeat(pallets) + `{${type}}`.repeat(boxes) + `(${type.repeat(bags)})`.repeat(bags > 0);
  }

  return result;
}

function organizeGiftsAlt(gifts) {
  return Array.from(gifts.matchAll(/(\d+)(\w)/g))
    .map(([, n, p]) => {
      const nPallets = `[${p}]`.repeat(Math.floor(n / 50));
      const nBoxes = `{${p}}`.repeat(Math.floor(n / 10) % 5);
      const nBags = `(${p.repeat(n % 10)})`.repeat(n % 10 > 0);

      return `${nPallets}${nBoxes}${nBags}`;
    })
    .join('');
}

export { organizeGifts, organizeGiftsAlt };
