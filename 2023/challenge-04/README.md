# 😵‍💫 Turn the parentheses around

## 🔢 Instructions

In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

```javascript
const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
```

Notes:

- The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
- There should not be any parentheses left in the final message.
- The maximum nesting level is 2.

## 💡 Solution

### 🧮 Mathematical Formulation

**Objective**: Correctly format a Christmas message by reversing the characters within each pair of parentheses, taking into account possible nested parentheses.

1. **Understanding the Message Structure:**

   - Imagine each pair of parentheses as a magical mirror that reverses the order of the letters inside it.
   - If there's a smaller mirror (nested parentheses) within a larger one, we need to handle the reflection in the smaller mirror first.

2. **The Task:**

   - Reverse the order of letters inside each mirror (parentheses), starting with the smallest (innermost) mirror.
   - Remove the mirrors (parentheses) after reversing the letters.

3. **Steps to Solve:**

   - **Find the Innermost Mirror:** Locate the deepest pair of parentheses (no other parentheses inside them).
   - **Reverse the Reflection:** Reverse the order of letters inside this pair of parentheses.
   - **Remove the Mirror:** Take away the parentheses after reversing the letters.
   - **Repeat:** Keep doing this until all mirrors (parentheses) are removed.

4. **Mathematical Representation:**

   - Given a string `S` with characters `S[1], S[2], ..., S[n]`.
   - For each deepest pair of parentheses `(` and `)`, reverse the characters between them.
   - Remove the parentheses after reversing.
   - Continue this process until no parentheses remain.

5. **Example:**
   - Message: `"sa(u(cla)atn)s"`
   - Steps:
     - Find innermost mirror: `(cla)`
     - Reverse within the mirror: `alc`
     - Message becomes: `"sa(ualcatn)s"`
     - Find the next mirror: `(ualcatn)`
     - Reverse within the mirror: `natclaus`
     - Message becomes: `"santaclaus"`
