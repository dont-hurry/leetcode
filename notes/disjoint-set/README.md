# Disjoint-set data structure

- 又稱為 union-find data structure
- 整個 data structure 包含了不同的 set, 每個 set 有一至多個 element
- 每個 element 有自己的 id, 以及 parent pointer (指向其他 element / 自己), 數個 element 以此方式形成一個連結結構, 代表一個 disjoint set
  - 如果有個 element, 其 parent pointer 指向自己, 則該 element 為其所屬 disjoint set 之代表
- 有不同的實作方式, 例如:
  - Array
  - Linked list
  - Forest: 每個 disjoint set 為一個 n-ary tree
- 以下內容主要以 forest (tree) 的實作方式來進行描述

## Operations and time complexity

- `makeSet(element)`
  - Makes a new set by creating a new element with a parent pointer to itself
  - 如果有使用 union by rank, 則將 rank 初始化為 0
  - Time complexity: `O(1)`
- `find(element)`
  - Follows the chain of parent pointers to determine the root (the representative member)
  - Time complexity: `O(n)`
  - 如果想要降低時間複雜度, 我們必須降低樹高, 見以下 optimizations
- `union(element1, element2)`
  - 合併兩個 disjoint set
    - 先透過 `find` 來找出兩個 set 的 root
    - 將其中一個 root 設為另一個 root 的子節點
  - 如果沒有採取特別的合併方式, 合併後的樹高可能會成長為 `O(n)`
  - Time complexity: `O(n)`, 因為需要先呼叫 `find`

## Optimizations

### Find with path compression

```js
function find(node) {
  if (node.parent !== node) {
    node.parent = find(node.parent);
  }
  return node.parent;
}
```

### Union by rank

- Always attach the shorter tree to the root of the taller tree
- 實作上, 需要記錄每個 element 的 rank; 新建立的 set, 其 rank 初始值為 0
- 合併時:
  - If `oldRank1 == oldRank2`, then `newRank = oldRank1 + 1`
  - If `oldRank1 != oldRank2`, then `newRank = max(oldRank1, oldRank2)`
  - 以上 `oldRank1`, `oldRank2`, `newRank` 都是指 root 的 rank
- 這裡使用 rank 一詞而非 height 的原因在於: 使用 path compression 會使 tree 趨於扁平, 使我們記錄的那個值與 height 不一致; 如果沒有使用 path compression, 則 rank 就是 height

## 應用

- Kruskal's algorithm (finding the minimum spanning tree of a graph)
- To detect cycle in undirected graphs
- Graph 中有 connected components 的情境

## Related problems

- [Number of Islands](https://leetcode.com/problems/number-of-islands/)

## 參考

- [https://algorithms.tutorialhorizon.com/disjoint-set-data-structure-union-find-algorithm/](https://algorithms.tutorialhorizon.com/disjoint-set-data-structure-union-find-algorithm/)
- [https://algorithms.tutorialhorizon.com/disjoint-set-union-find-algorithm-union-by-rank-and-path-compression/](https://algorithms.tutorialhorizon.com/disjoint-set-union-find-algorithm-union-by-rank-and-path-compression/)
- [https://haogroot.com/2021/01/29/union_find-leetcode/](https://haogroot.com/2021/01/29/union_find-leetcode/)
