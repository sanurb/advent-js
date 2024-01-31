# 😏 The naughty elf

## 🔢 Instructions

In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

```javascript
const original = 'abcd';
const modified = 'abcde';
findNaughtyStep(original, modified); // 'e'

const original = 'stepfor';
const modified = 'stepor';
findNaughtyStep(original, modified); // 'f'

const original = 'abcde';
const modified = 'abcde';
findNaughtyStep(original, modified); // ''
```

**To keep in mind**:

- There will always be one step difference or none.
- The modification can occur anywhere in the chain.
- The original sequence may be empty

## 💡 Solution

### 🧮 Mathematical Formulation

**Objective** : Identify the first discrepancy between two sequences of manufacturing steps - an extra or missing step - caused by a mischievous elf.

- Let's denote the original sequence as O and the modified sequence as M.
- We compare O[i] with M[i] for each position i until we find a discrepancy.
- The first character where O[i] differs from M[i] (or if M has an extra character at the end) is the naughty step.
