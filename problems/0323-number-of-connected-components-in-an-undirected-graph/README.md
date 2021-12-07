# 323. Number of Connected Components in an Undirected Graph

- [Description](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- Difficulty: Medium

## Solutions

- DFS (recursive)
  - Time complexity: `O(E + V)`
    - Building the adjacency list: `O(E)`
    - DFS: `O(E + V)`
  - Space complexity: `O(E + V)`
    - Building the adjacency list: `O(E)`
    - To keep track of visited vertices: `O(V)`
    - Stack for DFS: `O(V)`
- Disjoint set
  - Time complexity: `O(E * α(n))`
    - Iterating over every edge: `O(E)`
    - `union`: `O(α(n))`
  - Space complexity: `O(V)`

Notations:

- `E`: the number of edges
- `V`: the number of vertices
