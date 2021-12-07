/**
 * @param {character[][]} grid
 * @return {number}
 */
const DELTA_ROW = [-1, 0, 1, 0];
const DELTA_COL = [0, 1, 0, -1];

var numIslands = function (grid) {
  function BFS(row, col) {
    let queue = [[row, col]];

    while (queue.length > 0) {
      let [row, col] = queue.shift();

      if (row < 0 || row >= m) continue;
      if (col < 0 || col >= n) continue;
      if (grid[row][col] === "0" || hasVisited[row][col]) continue;

      hasVisited[row][col] = true;

      for (let i = 0; i < 4; i++) {
        queue.push([row + DELTA_ROW[i], col + DELTA_COL[i]]);
      }
    }
  }

  // m: the number of rows
  // n: the number of columns
  let m = grid.length;
  let n = grid[0].length;
  let hasVisited = new Array(m).fill().map(() => new Array(n).fill(false));
  let numberOfIslands = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === "1" && !hasVisited[row][col]) {
        numberOfIslands++;
        BFS(row, col);
      }
    }
  }

  return numberOfIslands;
};
