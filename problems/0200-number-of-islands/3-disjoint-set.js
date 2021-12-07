/**
 * @param {character[][]} grid
 * @return {number}
 */
const DELTA_ROW = [-1, 0, 1, 0];
const DELTA_COL = [0, 1, 0, -1];

class DisjointSet {
  constructor(grid, m, n) {
    this.grid = grid;
    this.m = m;
    this.n = n;
    this.hasVisited = new Array(m * n).fill(false);
    this.numberOfIslands = 0;

    this.parent = new Array(m * n).fill(null);
    this.rank = new Array(m * n).fill(0);

    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        if (this.grid[row][col] === "1") this.numberOfIslands++;

        this.parent[n * row + col] = n * row + col;
      }
    }
  }

  // With path compression
  find(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }

  // With union-by-rank
  union(row1, col1, row2, col2) {
    if (row2 < 0 || row2 >= this.m) return;
    if (col2 < 0 || col2 >= this.n) return;
    if (this.grid[row2][col2] === "0") return;

    let root1 = this.find(this.n * row1 + col1);
    let root2 = this.find(this.n * row2 + col2);
    if (root1 !== root2) {
      if (this.rank[root1] < this.rank[root2]) {
        this.parent[root1] = root2;
      } else if (this.rank[root1] > this.rank[root2]) {
        this.parent[root2] = root1;
      } else {
        this.parent[root1] = root2;
        this.rank[root2]++;
      }
      this.numberOfIslands--;
    }
  }
}

var numIslands = function (grid) {
  // m: the number of rows
  // n: the number of columns
  let m = grid.length;
  let n = grid[0].length;
  let disjointSet = new DisjointSet(grid, m, n);

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === "1") {
        for (let i = 0; i < 4; i++) {
          disjointSet.union(row, col, row + DELTA_ROW[i], col + DELTA_COL[i]);
        }
      }
    }
  }

  return disjointSet.numberOfIslands;
};
