# First gift repeated!

## 🔢 Instructions

In the toy factory of the North Pole, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

```javascript
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
```

**Watch out!** Watch out! The elves say this is a Google technical test.

## 💡 Solution

### 🧮 Mathematical Formulation

**Objective:** Find the first toy ID that repeats itself in a list, where the second occurrence appears before any other duplicate's second appearance. If no ID repeats, return -1.

1. **Understanding the Toy IDs:**

   - Imagine a line of toys, each with a number tag.
   - These tags are unique, but some toys might have gotten the same number by mistake.

2. **The Task:**

   - We need to walk along this line of toys and find the first tag number that appears more than once.
   - Specifically, we're looking for the tag that repeats itself before any other tag does for the second time.

3. **Steps to Solve:**

   - **Start Walking:** Begin at the first toy in the line and move forward.
   - **Check Tags:** Each time you see a tag, remember it. If you see the same tag again, stop and shout out that number!
   - **Remembering Tags:**
     - Use a memory book (like a list) to keep track of the tags you've seen.
     - The first time you see a tag, write it in your book.
     - The second time you see a tag, check if it's already in your book.
     - If it is, that's your answer!

4. **Mathematical Representation:**

   - Let's call our list of toy IDs `T` with elements `T[1], T[2], ..., T[n]`.
   - We iterate over `T`, and for each element `T[i]`:
     - If `T[i]` is not in our memory book, add it.
     - If `T[i]` is already in our memory book, then `T[i]` is our answer.

5. **Example:**

   - Given toy IDs: `[2, 1, 3, 5, 3, 2]`
   - We add 2, 1, 3, and 5 to our book. When we see 3 again, we stop and say "3!" because it's the first tag to repeat.

6. **No Repeats:**
   - If we reach the end of the line and no tag has repeated, we say "-1" since we didn't find any repeated tag.
