# 🎄 Create your own Christmas tree

## 🔢 Instructions

What an idea Sam Elfman has had! He wants to offer a service that creates a customized Christmas tree 🎄 in a matter of seconds.

To create it, we are given a string to form the tree and a number that indicates its height.

Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the indicated height. At least, they will always pass us one.

We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a final line with the trunk formed by the character | in the center and, finally, a newline \n.

For example, if we receive the string "123" and the number 4 as height, we would have to build this tree:

```javascript
   1
  2 3
 1 2 3
1 2 3 1
   |
```

```javascript
  *
 @ o
* @ o
  |
```

Note:

- The tree should always be centered, for that reason add blank spaces to the left of each line.
- Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.
- The ornaments have a white space between them for separation.

## 💡 Solution

### 🧮 Mathematical Formulation

This problem involves constructing a visual representation of a Christmas tree using a string of ornaments and a specified height. The tree is to be displayed as a multiline string, with ornaments arranged in a specific pattern and the tree centered on each line. Let's formulate this problem mathematically:

1. **Tree Structure:**

   - Define the tree height `H` as an integer representing the number of levels (excluding the trunk).
   - Let `ornaments` be a string where each character represents a unique ornament.

2. **Ornament Distribution:**

   - On each level `i` (ranging from 1 to `H`), the tree will have `i` ornaments.
   - Ornaments are selected cyclically from `ornaments`. For a given level `i`, the j-th ornament is `ornaments[(j - 1) % length(ornaments)]`, where `j` ranges from 1 to `i`.

3. **Tree Centering:**

   - The total width of the tree's base (the widest part) is `2H - 1`.
   - For each level `i`, the number of leading spaces is `(2H - 1 - 2i + 1) / 2` to center the ornaments.

4. **Trunk Formation:**

   - The trunk is represented by the character `|` and is centered in line with the tree levels.
   - It is positioned at level `H + 1`, with leading spaces calculated as `(2H - 1 - 1) / 2`.

5. **Multiline String Construction:**

   - Construct a multiline string, where each line corresponds to a level of the tree or the trunk.
   - The tree is completed by concatenating these lines with newline characters (`\n`).

6. **Visualizing the Tree:**

For `H = 4` and `ornaments = "123"`:

- Level 1: 3 spaces, `1`, 3 spaces.
- Level 2: 2 spaces, `2 3`, 2 spaces.
- Level 3: 1 space, `1 2 3`, 1 space.
- Level 4: `1 2 3 1`.
- Trunk: 3 spaces, `|`, 3 spaces.

- If `H` is 4 and ornaments are represented by `*`, the tree looks like this:

  ```
     *      <- Level 1 (1 ornament, 3 air spaces each side)
    * *     <- Level 2 (2 ornaments, 2 air spaces each side)
   * * *    <- Level 3 (3 ornaments, 1 air space each side)
  * * * *   <- Level 4 (4 ornaments, no air space)
     |      <- Trunk (centered)
  ```
