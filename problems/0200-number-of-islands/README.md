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
  - Time complexity: `O(m * n)`
    - 經過優化後的 disjoint-set data structure, 其 find 與 union 操作的 amortize time complexity 為 `O(α(n))`, 接近常數時間
  - Space complexity: `O(m * n)`

Notations:

- `m`: the number of rows
- `n`: the number of columns
