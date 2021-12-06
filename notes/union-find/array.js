// The Union-Find data structure implemented with array

class UnionFind {
  // 假設有 n 個 elements; elementId 由 0 編號至 n-1
  constructor(n) {
    this.parent = new Array(n).fill(null).map((value, index) => index);
  }

  // Time complexity: O(n)
  union(elementId1, elementId2) {
    this.parent[find(elementId1)] = find(elementId2);
  }

  // Time complexity: O(n)
  find(elementId) {
    let id = elementId;
    while (id !== this.parent(id)) {
      id = this.parent(id);
    }
    return id;
  }

  findWithPathCompression(elementId) {
    if (elementId === this.parent[elementId]) {
      return elementId;
    }

    return (this.parent[elementId] = this.findWithPathCompression(
      this.parent[elementId]
    ));
  }
}
