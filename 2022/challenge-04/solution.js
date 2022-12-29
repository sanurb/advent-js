function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => {
      return b.l + b.w + b.h - (a.l + a.w + a.h);
    })
    .slice(1)
    .every((box, i) => {
      return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h;
    });
}

const fitsInOneBoxSome = boxes => {
  const sortedBoxes = [...boxes].sort((firstBox, secondBox) => {
    return firstBox.l - secondBox.l;
  });

  return !sortedBoxes.some((currentBox, index, sortedBoxesList) =>
    sortedBoxesList
      .slice(index + 1)
      .some(remainBox =>
        [remainBox.l > currentBox.l, remainBox.w > currentBox.w, remainBox.h > currentBox.h].includes(false)
      )
  );
};

export { fitsInOneBox, fitsInOneBoxSome };
