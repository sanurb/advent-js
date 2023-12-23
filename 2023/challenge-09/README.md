# 🚦 Switch the lights

## 🔢 Instructions

They are turning on the Christmas lights 🎄 in the city and, as every year, they have to be fixed!

The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they must always alternate. That is, if the first light is red, the second must be green, the third red, the fourth green, etc.

We have been asked to write a function adjustLights that, given an array of strings with the color of each light, return the minimum number of lights that need to be changed for the colors to alternate.

```javascript
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴']);
// -> 1 (you change the second light to 🟢)
```

## 💡 Solution

### 🧮 Mathematical Formulation

The problem can be formulated mathematically as finding the minimum distance (in terms of the number of changes) to reach one of two possible alternating color patterns. For a sequence of n lights, the problem reduces to:

1. Pattern 1 (Starting with 🔴): RGRGRG... (alternating colors)
2. Pattern 2 (Starting with 🟢): GRGRGR... (alternating colors)

For each light at position i (0-indexed), we check if it matches the expected color in each pattern. The minimum number of changes is the lesser of the two totals.

### 🧠 Solution Approaches

#### Approach 1: Alternating Expected Color

- Start with the first light's color.
- Iterate through the lights, incrementing a counter whenever the current light doesn't match the expected color.
- Alternate the expected color after each light.
- The minimum changes required will be min(counter, n - counter).

#### Approach 2: Pre-Calculated Pattern Matching

- Pre-calculate the expected color for each position for both patterns.
- Iterate through the lights, counting mismatches for both patterns.
- Choose the pattern with fewer mismatches.
