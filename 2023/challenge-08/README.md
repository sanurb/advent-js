# 🏬 Sorting the warehouse

## 🔢 Instructions

The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z. For example, '66a11b' means 66 a gifts and 11 b gifts.

The elves have a special system for organizing the gifts:

- Every 10 gifts of the same type are packed in a box, represented by {x}. For example, 20 type a gifts are packed in two boxes like this: {a}{a}.
- Every 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a boxes are stacked on 2 pallets in this way: [a][a]
- Any additional gift is placed in a bag, represented by () and all of them are placed inside. For example, 4 b gifts are placed in a bag like this (bbbb)

The gifts are then placed in the following order: pallets, boxes and bags. And the gifts appear in the same order as the input string.

Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a string representing the warehouse.

```javascript
const result1 = organizeGifts('76a11b')
console.log(result1)
// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b)

```

## 💡 Solution

### 🧮 Mathematical Formulation

We can define the problem as a sequence of operations on a set of elements (gifts). Let `G` be a set of gifts where each element `g` in `G` has a type `t` and a quantity `q`. The goal is to transform this set into an ordered sequence of packed gifts using the least amount of space while adhering to the given packing rules.

1. **Gift Packing:** For a given type `t` with quantity `q`, the number of boxes `B` and pallets `P` can be defined as:

   - Boxes: `B = ⌊q / 10⌋`
   - Pallets: `P = ⌊B / 5⌋`
   - Remaining Gifts: `R = q % 10`
   - Remaining Boxes (after pallets): `B' = B % 5`

   Where `⌊x⌋` is the floor function representing the greatest integer less than or equal to `x`.

2. **Warehouse Representation:** The final warehouse representation is a concatenation of pallets, boxes, and bags in the order they appear in the input string. It can be represented as:
   - `Warehouse(t) = "[" × P + "{" × B' + "(" + R × t + ")" for each type t in G`

### Example Calculation

For `76a11b`:

- For `76a`:
  - `B = ⌊76 / 10⌋ = 7` boxes
  - `P = ⌊7 / 5⌋ = 1` pallet
  - `R = 76 % 10 = 6` remaining gifts
  - `B' = 7 % 5 = 2` remaining boxes
  - Warehouse representation for `a`: `[a]{a}{a}(aaaaaa)`
- For `11b`:
  - Apply the same formula as above for `b`.
  - Warehouse representation for `b`: `{b}(b)`

Combining both, we get: `[a]{a}{a}(aaaaaa){b}(b)`
