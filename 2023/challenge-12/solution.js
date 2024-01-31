function checkIsValidCopy(original, copy) {
  for (let i = 0; i < original.length; i++) {
    const char = original[i].match(/\w/g);
    const valid = `${char ? `${char}${char[0].toLowerCase()}` : ''}#+:. `;
    if (valid.indexOf(copy[i]) < valid.indexOf(original[i])) return false;
  }

  return true;
}

export { checkIsValidCopy };
