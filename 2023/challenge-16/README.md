# ❌ Friday deployment

## 🔢 Instructions

Yesterday, someone did a production deployment and the application for assembling Christmas trees broke. We've been asked to fix it as soon as possible.

The problem is that the format of the trees has changed. It's an array of numbers… but it should be an object! For example, the tree: [3, 1, 0, 8, 12, null, 1] looks like this:

```js
//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1
```

What we need is to transform the array into an object where each node of the tree has value, left, and right properties.

For example, running your transformTree function with [3, 1, 0, 8, 12, null, 1] should return this:

```js
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
```

The elf on duty who tried to solve the problem before going home, left us some clues:

- If a node doesn't have a value, it's represented with null. Therefore, if a node has a null value, it won't have any children.
- The root node is at index 0 in the array.
- There's a relationship between the index of a node and the index of its children. Look for the pattern!

## 💡 Solution

#### 🧮 Mathematical Formulation

The challenge is to convert a linear array representation of a binary tree into a nested object structure. Here's a mathematical and algorithmic approach to this problem:

1. **Binary Tree Representation:**

   - A binary tree is a data structure in which each node has at most two children, referred to as the left child and the right child.
   - For a node at index `i` in the array, its left child is located at index `2i + 1` and its right child at index `2i + 2`, if these indices are within the bounds of the array.

2. **Array to Tree Conversion:**

   - Given an array `A`, transform it into a binary tree object.
   - Each node in the tree should have properties: `value`, `left`, and `right`.

3. **Recursive Construction:**

   - Define a function `buildTree` which takes an array and an index `i` (initially 0, the root).
   - If `i` is within the array bounds and `A[i]` is not null, create a node:
     - `value`: `A[i]`.
     - `left`: Recursive call to `buildTree` with index `2i + 1`.
     - `right`: Recursive call to `buildTree` with index `2i + 2`.
   - If `i` is out of bounds or `A[i]` is null, return `null`.

4. **Output:**

   - The output is the root node of the constructed binary tree, which represents the entire tree structure.

5. **Algorithm Efficiency:**
   - The algorithm efficiently traverses the array once, with a time complexity of O(n), where n is the number of elements in the array.
