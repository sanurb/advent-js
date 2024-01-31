function transformTree(tree) {
  if (tree.length === 0) return null;

  const nodes = tree.map((value, _) => (value != null ? { value, left: null, right: null } : null));

  for (let i = 0; i < tree.length; i++) {
    if (nodes[i] != null) {
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
      if (leftIndex < tree.length) {
        nodes[i].left = nodes[leftIndex];
      }
      if (rightIndex < tree.length) {
        nodes[i].right = nodes[rightIndex];
      }
    }
  }

  return nodes[0];
}

function transformTreeRecursive(tree) {
  const getNode = i => {
    return tree[i] != null
      ? {
          value: tree[i],
          left: getNode(i * 2 + 1),
          right: getNode(i * 2 + 2)
        }
      : null;
  };
  const objTree = getNode(0);
  return objTree;
}

export { transformTree, transformTreeRecursive };
