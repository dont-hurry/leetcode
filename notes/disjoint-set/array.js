// The Disjoint-set data structure implemented with array

class DisjointSet {
  // 假設有 n 個 elements; elementId 由 0 編號至 n-1
  constructor(n) {
    this.parent = new Array(n).fill(null).map((value, index) => index);
    this.rank = new Array(n).fill(0);
  }

  find(elementId) {
    if (elementId !== this.parent(elementId)) {
      return find(this.parent(elementId));
    }
    return elementId;
  }

  union(elementId1, elementId2) {
    this.parent[find(elementId1)] = find(elementId2);
  }

  findWithPathCompression(elementId) {
    if (elementId !== this.parent[elementId]) {
      this.parent[elementId] = this.findWithPathCompression(
        this.parent[elementId]
      );
    }

    return this.parent(elementId);
  }

  unionByRank(elementId1, elementId2) {
    let root1 = this.findWithPathCompression(elementId1);
    let root2 = this.findWithPathCompression(elementId2);

    if (this.rank[root1] < this.rank[root2]) {
      this.parent[root1] = root2;
    } else if (this.rank[root1] > this.rank[root2]) {
      this.parent[root2] = root1;
    } else {
      this.parent[root1] = root2;
      this.rank[root2]++;
    }
  }
}
