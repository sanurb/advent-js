# 📖 The studious elves

## 🔢 Instructions

In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge to form a Christmas palindrome.

**A palindrome is a word that reads the same forwards and backwards**. The elves want to know if it is possible to form a palindrome by making, at most, one exchange of letters.

Create a function **getIndexsForPalindrome** that receives a string and returns:

- If it is already a palindrome, an empty array.
- If it is not possible, null.
- If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.

For example:

```js
getIndexsForPalindrome('anna'); // []
getIndexsForPalindrome('abab'); // [0, 1]
getIndexsForPalindrome('abac'); // null
getIndexsForPalindrome('aaaaaaaa'); // []
getIndexsForPalindrome('aaababa'); // [1, 3]
getIndexsForPalindrome('caababa'); // null00
```

If the palindrome can be formed with different swaps, **always return the first one found.**

## 💡 Solution

### 🧮 Mathematical Formulation

The challenge here is to determine if a given string can be transformed into a palindrome by making at most one swap of its characters. Let's dissect this problem:

1. **Palindrome Definition:**

   - A string `s` is a palindrome if it reads the same forwards and backwards. Mathematically, `s` is a palindrome if for every index `i` (where `i` ranges from `0` to `length(s)/2`), the character at `i` is the same as the character at `length(s) - i - 1`.

2. **Swap Analysis:**

   - To check if a palindrome can be formed with one swap, we need to identify two positions `i` and `j` in the string such that swapping the characters at these positions results in a palindrome.

3. **Character Mismatch Identification:**

   - Iterate through the string from both ends towards the center.
   - At each step, compare the characters at the current indices from the start and end.
   - If a mismatch is found, record the indices of these mismatched characters.

4. **Palindrome Formation Check:**

   - If no mismatches are found, the string is already a palindrome. Return an empty array.
   - If exactly one mismatch is found, check if swapping the mismatched characters results in a palindrome.
   - If more than one mismatch is found, it’s not possible to form a palindrome with a single swap. Return `null`.

5. **Return Indices for Swap:**

   - If a single swap can form a palindrome, return the indices of the mismatched characters.
   - Ensure to return the first pair of indices found that make this possible.

6. **Output:**

   - Return an empty array if the input is already a palindrome.
   - Return `null` if it's not possible to form a palindrome with one change.
   - Return an array with two indices if a palindrome can be formed by swapping the characters at these indices.

7. **Algorithm Efficiency:**
   - The algorithm should be efficient, ideally with linear time complexity O(n), where n is the length of the string.

#### 📊 Example Analysis

Consider `s = 'abab'`:

- Iterate through the string: Compare `a` (index 0) with `b` (index 3) - mismatch.
- Check if swapping them results in a palindrome: `baba` - not a palindrome.
- Compare `b` (index 1) with `a` (index 2) - mismatch.
- Check if swapping them results in a palindrome: `aabb` - not a palindrome.
- However, the correct swap is `abab` -> `baab`, which is a palindrome.
- Return `[0, 1]` as the first found swap that creates a palindrome.
