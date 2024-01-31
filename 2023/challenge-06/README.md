# 🦌 The reindeer on trial

## 🔢 Instructions

The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.

For this, they have a text string movements where each character represents the direction of the reindeer's movement:

> = Moves to the right
> < = Moves to the left

- = Can move forward or backward

For example, if the movement is >>\*<, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.

The elves want to know what the maximum distance the reindeer travels is after completing all movements.

In the previous example, the maximum distance the reindeer travels is 2. It goes to the right twice +2, then with the \* it can go to the right again to maximize the distance +1 and then it goes to the left -1.

Create a maxDistance function that takes the text string movements and returns the maximum distance that the reindeer can travel in any direction:

```javascript
const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

Keep in mind that it doesn't matter whether it is to the left or right, the distance is the absolute value of the maximum distance traveled at the end of the movements.

## 💡 Solution

### 🧮 Mathematical Formulation

The "Reindeer on Trial" problem involves calculating the maximum possible linear distance a reindeer can travel given a sequence of directional instructions. Each instruction affects the reindeer's position on a one-dimensional axis. Let's break down the problem mathematically:

1. **Movement Representation:**

   - The movement string, `movements`, is composed of characters, each representing a directional instruction:
     - `>`: Move one unit to the right.
     - `<`: Move one unit to the left.
     - `*`: Represents a choice to move either left or right, chosen to maximize the final distance from the start point.

2. **Distance Calculation:**

   - Define a variable, `position`, initialized to 0, representing the reindeer's current position on the axis.
   - For each character `c` in `movements`:
     - If `c` is `>`, increment `position` by 1.
     - If `c` is `<`, decrement `position` by 1.
     - If `c` is `*`, delay the decision and count the number of such `*` characters (let's call this count `wildcards`).

3. **Wildcard Resolution:**

   - After processing all non-wildcard characters, use `wildcards` to further maximize the distance:
     - If `position` is non-negative, each `*` will be considered as a movement to the right, adding `wildcards` to `position`.
     - If `position` is negative, each `*` will be considered as a movement to the left, subtracting `wildcards` from `position`.

4. **Maximizing Distance:**

   - The maximum distance traveled is the absolute value of `position` after considering all instructions, including the resolved wildcards.

5. **Output:**
   - The function returns the absolute value of `position`, which represents the maximum distance the reindeer can travel in either direction.

#### 📊 Example Analysis

Consider `movements = '>>*<'`:

- Initial `position = 0`.
- After processing `>>`, `position = 2`.
- Delay decision for `*`.
- After processing `<`, `position = 1`.
- Resolve `*` by adding 1 (as `position` is positive), final `position = 2`.
- Maximum distance = `|2| = 2`.
