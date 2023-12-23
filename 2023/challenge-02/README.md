# 🏭 We start the factory

## 🔢 Instructions

In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

```javascript
const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

manufacture(gifts, materials); // ["tren", "oso"]

const gifts = ['juego', 'puzzle'];
const materials = 'jlepuz';

manufacture(gifts, materials); // ["puzzle"]

const gifts = ['libro', 'ps5'];
const materials = 'psli';

manufacture(gifts, materials); // []
```

## 💡 Solution

### 🧮 Mathematical Formulation

Given a list of desired gifts (G) and available materials (M), determine which gifts can be produced. Each gift is represented as a string, and its construction requires a specific subset of characters from the materials.

#### Gifts

Denote the set of n gifts as G = {g₁, g₂, ..., gₙ}, where each gift gᵢ is a string representing its material requirements.

#### Materials

Define the available materials as a string M.

#### Gift Manufacturing Function

Introduce a function f(gᵢ) that maps each gift gᵢ to the set of characters (f(gᵢ) ⊆ Σ) required for its construction, where Σ is the alphabet of available materials.

#### Feasibility Constraint

Define a binary feasibility indicator can_make(gᵢ), where can_make(gᵢ) = 1 if and only if f(gᵢ) ⊆ M.

#### Objective Function:

Our objective is to maximize the number of gifts that can be produced from the available materials. This can be formulated as a set packing problem with the following objective function:

```
Maximize ∑(gᵢ in G) can_make(gᵢ)
```
