/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  function find(vertex) {
    if (parent[vertex] !== vertex) {
      parent[vertex] = find(parent[vertex]);
    }
    return parent[vertex];
  }

  function union(vertex1, vertex2) {
    let root1 = find(vertex1);
    let root2 = find(vertex2);

    if (root1 !== root2) {
      if (rank[root1] < rank[root2]) {
        parent[root1] = root2;
      } else if (rank[root1] > rank[root2]) {
        parent[root2] = root1;
      } else {
        parent[root1] = root2;
        rank[root2]++;
      }
      numberOfComponents--;
    }
  }

  let parent = new Array(n).fill().map((value, index) => index);
  let rank = new Array(n).fill(0);
  let numberOfComponents = n;

  for (let edge of edges) {
    union(edge[0], edge[1]);
  }

  return numberOfComponents;
};
