/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  function DFS(i) {
    if (visited[i]) return;

    visited[i] = true;

    for (let neighbor of adjacencyList[i]) DFS(neighbor);
  }

  let adjacencyList = new Array(n).fill().map(() => []);

  for (let edge of edges) {
    adjacencyList[edge[0]].push(edge[1]);
    adjacencyList[edge[1]].push(edge[0]);
  }

  let visited = new Array(n).fill(false);
  let numberOfComponents = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      numberOfComponents++;
      DFS(i);
    }
  }

  return numberOfComponents;
};
