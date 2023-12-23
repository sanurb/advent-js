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

1. **Understanding the Tree Structure:**

   - Imagine stacking ice cream scoops (representing ornaments) on top of each other to make a tall ice cream cone (our Christmas tree).
   - Each scoop is a bit bigger than the one above it.
   - Finally, put a stick (the trunk) at the bottom.

2. **Building the Tree, Step-by-Step:**

   - **Top of the Tree (Smallest Scoop):**

     - Start with one ornament at the top.
     - This is like placing a single scoop of ice cream on a cone.

   - **Adding More Scoops (Levels of Ornaments):**

     - For each level down the tree, add one more ornament than the level above.
     - This makes each new level of scoops slightly bigger.

   - **Centering the Scoops:**

     - Each level of scoops (ornaments) is centered. This means putting the same number of empty spaces (air) on each side of the scoops.
     - The number of air spaces decreases by one as we move down each level.

   - **The Trunk:**
     - At the bottom, place the trunk (a single '|'), centered just like the scoops.

3. **Mathematical Representation:**

   - Let's call the height of the tree `H`.
   - For each level `L` (starting from 1 at the top to `H` at the bottom), we have:
     - `H - L` air spaces on each side.
     - `L` ornaments (scoops) in the middle.
   - The trunk is just one '|' centered at the bottom.

4. **Visualizing the Tree:**

   - If `H` is 4 and ornaments are represented by `*`, the tree looks like this:

     ```
        *      <- Level 1 (1 ornament, 3 air spaces each side)
       * *     <- Level 2 (2 ornaments, 2 air spaces each side)
      * * *    <- Level 3 (3 ornaments, 1 air space each side)
     * * * *   <- Level 4 (4 ornaments, no air space)
        |      <- Trunk (centered)
     ```
