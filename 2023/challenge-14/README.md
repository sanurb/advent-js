# 🚨 Avoid the alarm

## 🔢 Instructions

With the rise of social media, Santa Claus is terrified that children might wake up while he is delivering gifts in their homes, use their phone to record him and go viral on TikTok.

He wants to avoid this at all costs. Each house on that street has a number of prepared gifts. However, the houses have a security system connected between adjacent houses, so he can't leave gifts in two consecutive houses, or the alarm will be triggered and alert the children.

Given an array of non-negative integers gifts that represents the number of gifts in each house, your task is to help Santa Claus determine the maximum number of gifts he can deliver in one night without setting off any alarms.

```javascript
maxGifts([2, 4, 2]); // 4 (4)
maxGifts([5, 1, 1, 5]); // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]); // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]); // 103 (3 + 100)
```

## 💡 Solution

#### 🧮 Mathematical Formulation

The "Avoid the Alarm" problem is akin to a classic optimization problem in computer science, often solved using dynamic programming techniques. It can be formulated as follows:

1. **Problem Definition:**

   - Given an array `gifts`, where each element `gifts[i]` represents the number of gifts in the `i`-th house.
   - Santa must maximize the total number of gifts delivered without triggering the alarm, which occurs if he delivers gifts to two consecutive houses.

2. **Optimal Substructure:**

   - The problem exhibits optimal substructure, meaning the optimal solution can be constructed efficiently from optimal solutions of its subproblems.
   - Define `maxGifts(i)` as the maximum number of gifts Santa can deliver from the first `i` houses.
   - The decision at each house `i` is binary: either Santa delivers gifts at house `i` or skips it.

3. **Recurrence Relation:**

   - `maxGifts(i) = max(maxGifts(i-1), gifts[i] + maxGifts(i-2))` for `i ≥ 2`.
   - `maxGifts(1) = gifts[0]` and `maxGifts(0) = 0` as base cases.
   - The relation states that the maximum gifts from the first `i` houses is the larger of:
     - The maximum gifts from the first `i-1` houses (skipping the `i`-th house).
     - The number of gifts in the `i`-th house plus the maximum gifts from the first `i-2` houses.

4. **Iterative Solution:**

   - Use a bottom-up approach to fill a table `dp[]` where `dp[i]` stores `maxGifts(i)`.
   - Iteratively compute `dp[i]` using the recurrence relation for `i = 2` to `n` (the length of `gifts`).

5. **Output:**

   - The solution to the problem is `dp[n]`, representing the maximum number of gifts Santa can deliver without triggering any alarms.

6. **Efficiency:**
   - The algorithm is efficient, with a time complexity of O(n) and space complexity of O(n), which can be further optimized to O(1) space by using two variables instead of an array.
