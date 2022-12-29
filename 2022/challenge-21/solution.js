function printTable(gifts) {
  gifts = gifts.map(x => [x.name, `${x.quantity}`]);
  gifts.unshift(['Gift', 'Quantity']);

  const lengthGift = Math.max(...gifts.map(x => x[0].length));
  const lengthQuantity = Math.max(...gifts.map(x => x[1].length));

  gifts.splice(1, 0, ['-'.repeat(lengthGift), '-'.repeat(lengthQuantity)]);

  const tables = gifts.reduce(
    (str, x) => `${str}| ${x[0].padEnd(lengthGift)} | ${x[1].padEnd(lengthQuantity)} |\n`,
    ''
  );

  const top = `${'+'.repeat(lengthGift + lengthQuantity + 7)}\n`;
  const bottom = '*'.repeat(lengthGift + lengthQuantity + 7);

  return top + tables + bottom;
}

export { printTable };
