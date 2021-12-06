# Max Area of Island

- [Description](https://leetcode.com/problems/max-area-of-island/)
- Difficulty: Medium

## Solutions

- DFS (recursive)
  - Time complexity: `O(m * n)`
  - Space complexity: `O(m * n)`
    - The space used by `hasVisited`
    - The space used by the call stack during our recursion
- DFS (iterative)
  - Time complexity: `O(m * n)`
  - Space complexity: `O(m * n)`
    - The space used by `hasVisited`
    - The space used by `stack`

Notations:

- `m`: the number of rows
- `n`: the number of columns
