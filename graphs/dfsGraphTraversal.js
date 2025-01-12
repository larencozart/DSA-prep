// Implement a function `dfs` that accepts two arguments: the adjacency list
// representing a directed acyclic graph and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// Stack Solution
function dfs(adjList, source) {
  let stack = [source];

  while (stack.length > 0) {
    let vertex = stack.shift();
    console.log(vertex);

    let connections = adjList.get(vertex);
    stack = stack.concat(connections);
  }
}

// Recursive Solution
function dfs2(adjList, source) {
  console.log(source);

  let connections = adjList.get(source);

  for (let i = 0; i < connections.length; i += 1) {
    let vertex = connections[i];
    dfs(adjList, vertex);
  }
}




const adjList = new Map();
adjList.set(1, []);
adjList.set(2, [1, 3, 4]);
adjList.set(3, [5]);
adjList.set(4, [6]);
adjList.set(5, []);
adjList.set(6, []);
adjList.set(7, [6]);

dfs(adjList, 2); // 2, 4, 6, 3, 5, 1 or 2, 1, 3, 5, 4, 6

// Note that the output can vary based on the order in
// which you process neighbors. These two outputs are
// the most likely, but other valid orders exist.





// _____________________________________________________

// However, what if we have a directed cyclic or undirected graph?

// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// DFS Recursive Solution
function dfs(adjList, source, visited = new Set()) {
  console.log(source);
  visited.add(source);

  let neighbors = adjList.get(source);
  for (let neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(adjList, neighbor, visited);
    }
  }
}

// DFS Stack Solution
function dfs(adjList, source) {
  let stack = [source];
  let visited = new Set([source]);

  while (stack.length !== 0) {
    let current = stack.pop();
    console.log(current);

    let neighbors = adjList.get(current);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
}

// BFS solution
function bfs(adjList, source) {
  let queue = [source];
  let visited = new Set([source]);

  while (queue.length !== 0) {
    let current = queue.shift();
    console.log(current);

    let neighbors = adjList.get(current);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

const adjList2 = new Map();
adjList2.set(1, [2]);
adjList2.set(2, [1, 3]);
adjList2.set(3, [2]);

dfs(adjList2, 1); // 1, 2, 3