# ↔️ Autonomous robot

## 🔢 Instructions

We are programming some **robots** called giftbot 🤖🎁 that autonomously navigate gift warehouses.

We are creating a function to which we pass: the warehouse 🏬 they must navigate and the movements ↔️ they can make.

The warehouse is represented as an array of text strings, where:

- . means there is a clear path.
- - means there is an obstacle.
- ! is the robot's initial position.

The movements are an array of text strings, where:

- R moves the robot one position to the right.
- L moves the robot one position to the left.
- U moves the robot one position upwards.
- D moves the robot one position downwards.
  It must be taken into account that the robot cannot overcome obstacles or the warehouse boundaries.

Given a warehouse and the movements, we need to return the array with the robot's final position.

```js
const store = ['..!....', '...*.*.'];

const movements = ['R', 'R', 'D', 'L'];
const result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.
```

Keep in mind that the store is an array that can have a number of rows ranging from 1 to 100, as we have warehouses of all sizes.

Also note that the robot might end up in its initial position if it can't move or if it's going around in circles.

## 💡 Solution

#### 🧮 Mathematical Formulation

The task is to navigate a robot through a grid-based warehouse, subject to movement commands and environmental constraints. Here's a succinct mathematical approach:

1. **Grid and Movements:**

   - Define a grid `G` as a matrix with elements representing path (`'.'`), obstacle (`'*'`), and initial robot position (`'!'`).
   - Movements `M` are a sequence of commands: `'R'` (right), `'L'` (left), `'U'` (up), `'D'` (down).

2. **Robot Navigation:**

   - Let `(x, y)` be the robot's current position.
   - For each command `c ∈ M`, update `(x, y)` based on `c`:
     - `'R'`: `(x, y+1)`, `'L'`: `(x, y-1)`, `'U'`: `(x-1, y)`, `'D'`: `(x+1, y)`.
   - Apply the move if it leads to a valid path cell within `G`.

3. **Final State:**

   - Mark the robot's final position on `G` with `'!'`.
   - Replace the initial position marker with `'.'`.

4. **Output:**
   - Return the modified grid `G` showing the robot's final position.

This formulation captures the problem's essence, focusing on grid navigation and the decision-making process for each movement command.
