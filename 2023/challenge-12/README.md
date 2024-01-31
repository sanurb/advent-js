# 📸 Is it a valid copy?

## 🔢 Instructions

In the North Pole **they still use paper photocopiers**. Elves use them to copy the letters that children send to Santa, so they can send them to all the gift departments.

However, **they are very old and do not work very well**. Every time they make a copy, the quality of the copy slightly decreases, a phenomenon known as generation loss.

**You need to detect if a letter is a copy of another**. The letters are very long and you can't read them, but you can compare them with an algorithm.

There is a high **probability** that a character will degrade with each copy (it doesn't always happen!). And when it happens, the rule it follows is:

- The characters from A to Z degrade from capital letters to lower-case letters (A-Z ⇒ a-z)
- Letters degrade in a series of characters in this order: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
- Once the letters have degraded into the symbols, they can continue to degrade.
- Note that the last one is a blank space, not an empty character.
- Characters that are not letters (like digits) do not degrade.

Knowing this and receiving two letters. The supposed original and the copy. You must determine if the copy is a copy of the other.

```javascript
checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#'); // true
checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'); // false (due to the initial p)
checkIsValidCopy('Santa Claus', 's#+:. c:. s'); // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s'); // false (there is a # where it shouldn't be)
```

To understand how photocopiers and their degradation work, look at this example:

```javascript
original:  'Santa Claus'
1st copy:  'santa cla#s'
2nd copy:  'sa#t# cl#+s'
3rd copy:  'sa+## c#+:s'
4th copy:  's#++. c+:.s'
5th copy:  's#+:. c:. s'
```

Therefore **s#+:. c+:++** is a valid copy of **Santa Claus**. And, as you see, the degradation of the letters does not occur in a specific order, it is random.

[Based on the CodeWars challenge Photocopy decay](https://www.codewars.com/kata/5b6fcd9668cb2e282d00000f)

## 💡 Solution

### 🧮 Mathematical Formulation

In addressing the challenge of determining if one string (`copy`) is a valid degraded version of another (`original`), we apply a series of transformation rules to assess validity. This process can be succinctly formulated as follows:

1. **Transformation Mapping:**

   - Define a mapping `T` that encapsulates the degradation rules: `T: {A-Z → a-z, a-z → # → + → : → . → [space], non-letters → same}`.

2. **String Comparison Process:**

   - For each character `c_o` in `original` and corresponding `c_c` in `copy` at index `i`:
     - If `c_o` is a letter, `c_c` must be in the set of valid transformations of `c_o` according to `T`.
     - If `c_o` is a non-letter, `c_c` must equal `c_o`.

3. **Validity Criterion:**

   - `copy` is a valid degraded version of `original` if and only if all character pairs `(c_o, c_c)` satisfy the transformation rules in `T`.

4. **Efficiency Consideration:**
   - The solution requires a single pass comparison, making it O(n) in time complexity, where n is the length of `original`.

#### 📊 Sample Validation

Consider `original = 'Santa Claus'` and `copy = 's#+:. c+:++'`:

- Sequentially apply `T` to each `c_o` in `original`.
- Check if each `c_c` in `copy` aligns with `T(c_o)`.
- Given `T(S) = s`, `T(a) = a, #`, ..., `T(u) = u, ' '`, the `copy` string matches the transformation criteria.
- Conclude `copy` is a valid degraded version of `original`.
