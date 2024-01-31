# 🛷 Santa's CyberTruck

## 🔢 Instructions

Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

```
. = Road
S = Santa's Sled
* = Open barrier
| = Closed barrier
```

Example of a road: S...|....|.....

Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

All barriers start closed, but after 5 units of time, they all open forever.

Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:

```javascript
const road = 'S..|...|..';
const time = 10; // units of time
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
```

The result is an array where each element shows the road at each unit of time.

Take into account that if the sled is in the same position as a barrier, then it takes its place in the array.

The elves were inspired by this [Code Wars challenge](https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/javascript).

## 💡 Solution

### 🧮 Mathematical Formulation

**Objective:** Simulate Santa's sled movement along a road with barriers, capturing the road's state at each unit of time.

1. **Understanding the Road:**

   - The road is a string with symbols representing different entities:
     - `.` for the road.
     - `S` for Santa's sled.
     - `|` for closed barriers.
     - `*` for open barriers.
   - Santa's sled moves one position to the right each unit of time.
   - Barriers start closed (`|`) and open (`*`) after 5 units of time, staying open thereafter.

2. **The Task:**

   - Track the sled's position as it moves along the road.
   - If the sled encounters a closed barrier, it stops until the barrier opens.
   - Once a barrier opens, the sled can continue moving.

3. **Steps to Solve:**

   - **Initialize the Road:** Represent the road as a sequence of characters.
   - **Simulate Each Time Unit:**
     - Move the sled one position right if the path is clear or the barrier is open.
     - If the sled reaches a closed barrier, it waits.
   - **Open the Barriers:** After 5 units of time, change all barriers from closed (`|`) to open (`*`).
   - **Update the Road State:** At each time unit, update the road string to reflect the sled's position and barrier states.

4. **Mathematical Representation:**

   - Let's denote the road as a string `R` with characters `R[1], R[2], ..., R[n]`.
   - For each time unit `t`:
     - If `t < 5`, barriers are `|`. If `t >= 5`, change all `|` to `*`.
     - Move `S` one position right if the next position is `.` or `*`.
     - Keep track of the sled's position and update `R` accordingly.
   - Store the state of `R` at the end of each time unit in an array.

5. **Example:**
   - Road: `"S..|...|.."`, Time: `10`
   - Simulation Steps:
     - Initial: `"S..|...|.."`.
     - T=1: `".S.|...|.."`.
     - T=2-4: Sled stops at the barrier.
     - T=5: Barriers open, sled moves.
     - T=6-9: Sled moves through the open barriers.
   - Result: An array showing the road state at each time unit.
