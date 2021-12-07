/**
 * @param {character[][]} grid
 * @return {number}
 */
const DELTA_ROW = [-1, 0, 1, 0];
const DELTA_COL = [0, 1, 0, -1];

var numIslands = function (grid) {
  function DFS(row, col) {
    if (row < 0 || row >= m) return;
    if (col < 0 || col >= n) return;
    if (grid[row][col] === "0" || hasVisited[row][col]) return;

    hasVisited[row][col] = true;

    for (let i = 0; i < 4; i++) {
      DFS(row + DELTA_ROW[i], col + DELTA_COL[i]);
    }
  }

  // m: the number of rows
  // n: the number of columns
  let m = grid.length;
  let n = grid[0].length;
  let hasVisited = new Array(m).fill(null).map(() => new Array(n).fill(false));
  let numberOfIslands = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === "1" && !hasVisited[row][col]) {
        numberOfIslands++;
        DFS(row, col);
      }
    }
  }

  return numberOfIslands;
};
