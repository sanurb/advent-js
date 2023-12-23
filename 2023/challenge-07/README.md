# 📦 The 3D boxes

## 🔢 Instructions

Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

```javascript
drawGift(4, '+');

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*');
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^');
/*
#
*/
```

Important: We have been told that there is always to leave a newline at the end of the drawing.

### 🧮 Mathematical Formulation

The problem involves creating a 2D representation of a 3D gift box using ASCII characters, with the size `n` dictating the dimensions of the box. Let's break down the problem mathematically:

1. **Top Surface:**

   - A row of `n` hashes (`#`), centered, representing the top of the gift.
   - Example for `n = 4`: `####`

2. **Upper Sides:**

   - For each row `i` from 1 to `n-1`, the row consists of:
     - `n - i` spaces (` `), followed by
     - a hash (`#`), followed by
     - `i - 1` symbols (e.g., `+`), followed by
     - a hash (`#`).
   - Example for `n = 4` and symbol `+`: `#++#`

3. **Front Surface:**

   - A row of `n` hashes (`#`), followed by `n - 2` symbols.
   - Example for `n = 4` and symbol `+`: `####++#`

4. **Lower Sides:**

   - For each row `i` from `n-2` down to 0, the row consists of:
     - a hash (`#`), followed by
     - `n - 2` symbols, followed by
     - `i` hashes (`#`).
   - Example for `n = 4` and symbol `+`: `#+++#`

5. **Bottom Surface:**
   - A row of `n` hashes (`#`).
   - Example for `n = 4`: `####`
