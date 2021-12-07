/**
 * @param {number[][]} grid
 * @return {number}
 */
const DELTA_ROW = [-1, 0, 1, 0];
const DELTA_COL = [0, 1, 0, -1];

var maxAreaOfIsland = function (grid) {
  function getAreaByDFS(row, col) {
    if (row < 0 || row >= m) return 0;
    if (col < 0 || col >= n) return 0;
    if (grid[row][col] === 0 || hasVisited[row][col]) return 0;

    hasVisited[row][col] = true;

    let area = 1;
    for (let i = 0; i < 4; i++) {
      area += getAreaByDFS(row + DELTA_ROW[i], col + DELTA_COL[i]);
    }
    return area;
  }

  // m: the number of rows
  // n: the number of columns
  let m = grid.length;
  let n = grid[0].length;
  let hasVisited = new Array(m).fill().map(() => new Array(n).fill(false));
  let maxArea = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      maxArea = Math.max(maxArea, getAreaByDFS(row, col));
    }
  }

  return maxArea;
};
