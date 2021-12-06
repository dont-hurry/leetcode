# Union-Find data structure

- 常用在 disjoint sets, 以及 graph 中有 connected components 的情境
  - 又稱為 disjoint-set data structure
- 有不同的實作方式, 例如:
  - Array
  - Linked list
  - Forest: 每個 disjoint set 為一個 n-ary tree

## Operations and time complexity

- `find(element)`
  - 找出 `element` 最上層的 parent
  - 時間複雜度: `O(n)` for the worst case
    - Worst case: 需要遍歷所有的 elements
    - 在以 forest 實作的方式中, 如果想要降低時間複雜度, 我們必須保持樹的平衡
- `union(element1, element2)`
  - 時間複雜度: `O(n)`
    - 合併兩個 set 只需要 constant time, 不過我們還需要呼叫 `find` 來找出這兩個 set 最上層的 parent, 因此時間複雜度為 `O(n)`

## Optimizations

- Find with path compression
- Union by size / rank❓

## Related problems

- [Number of Islands](https://leetcode.com/problems/number-of-islands/)

## 參考

- [https://haogroot.com/2021/01/29/union_find-leetcode/](https://haogroot.com/2021/01/29/union_find-leetcode/)
