function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    let missingChar = false;
    for (const char of gift) {
      missingChar ||= !materials.includes(char);

      // Logical OR assignment saves me the following if statement (1 point less of complexity)
      // if (!materials.includes(char)) {
      //   return false;
      // }
    }
    return !missingChar;
  });
}

function manufactureAlt(gifts, materials) {
  // Pre-process materials for fast lookup
  const materialsSet = new Set(materials.split(''));

  return gifts.filter(gift => {
    let missingChar = false;
    for (const char of gift) {
      missingChar ||= !materialsSet.has?.(char);
    }
    return !missingChar;
  });
}

export { manufacture, manufactureAlt };
