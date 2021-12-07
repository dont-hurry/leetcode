# 200. Number of Islands

- [Description](https://leetcode.com/problems/number-of-islands/)
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
- BFS
  - Time complexity: `O(m * n)`
  - Space complexity: `O(min(m, n))`
- Disjoint set
  - Time complexity: `O(m * n * α(n))`
  - Space complexity: `O(m * n)`

Notations:

- `m`: the number of rows
- `n`: the number of columns
