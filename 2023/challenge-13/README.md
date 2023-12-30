# ⌚️ Calculating the time

## 🔢 Instructions

The elves are preparing for **Christmas Eve** and they need your help to determine if they have enough time or not ⏳.

For this, they give you an array with the duration of each delivery. The format of the duration is HH:mm:ss, the deliveries start at 00:00:00 and the time limit is 07:00:00.

**Your function must return the time they will lack or the time they will have left over** in order to finish the deliveries. The format of the returned duration should be HH:mm:ss.

If they finish before 07:00:00, the remaining time until 07:00:00 should be displayed with a negative sign. For example, **if they have 1 hour and 30 minutes left over, return -01:30:00**

```javascript
calculateTime(['00:10:00', '01:00:00', '03:30:00']);
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00']);
// '00:30:00'

calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']); // '-05:29:00'
```

## 💡 Solution

#### 🧮 Mathematical Formulation

When addressing this problem in a high-level interview or competitive programming scenario, the focus would be on an elegant, concise, and efficient approach. Here's how a senior software engineer might formulate the solution:

1. **Time Parsing and Aggregation:**

   - Parse each duration `HH:mm:ss` into a total number of seconds. This involves converting hours to seconds (`hours * 3600`), minutes to seconds (`minutes * 60`), and summing these with the seconds.
   - Aggregate these seconds for all durations to find `totalDuration`.

2. **Time Limit Comparison:**

   - Set `timeLimit` as 7 hours in seconds (7 \* 3600 = 25200 seconds).
   - Determine the time difference: `timeDifference = timeLimit - totalDuration`.

3. **Result Formatting:**

   - Convert `timeDifference` back into `HH:mm:ss` format.
   - If `timeDifference` is positive, it's a surplus; if negative, it's a deficit.
   - For a surplus, add a negative sign to the formatted time.

4. **Efficiency Consideration:**

   - The parsing and aggregation should be linear with respect to the number of durations, O(n).
   - Use straightforward arithmetic for clarity and speed.

5. **Output:**
   - Return the formatted time string, indicating surplus or deficit relative to the `timeLimit`.

#### 📊 Example

- Given durations `['00:10:00', '01:00:00', '03:30:00']`:
  - Total in seconds: 600 + 3600 + 12600 = 16800.
  - Surplus time in seconds: 25200 - 16800 = 8400.
  - Formatted surplus: `-02:20:00`.
