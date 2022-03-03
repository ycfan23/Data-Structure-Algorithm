class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }
  removeVertex(vertex) {
    while(adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();

      removeEdge(adjacentVertex, vertex)
    }
    delete this.adjacencyList[vertex]
  }

  DFS(start) {
    let data = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    (function traverse(vertex) {
      if (!vertex) return null;

      data.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return traverse(neighbor)
        }
      })
    })(start)

    return data;
  }

  BFS(start) {
    let queue = [start];
    let data = [];
    let visited = {};
    visited[start] = true;

    let current;

    while (queue.length) {
      current = queue.shift();
      data.push(current)

      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return data;
  }
}