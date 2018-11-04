/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

let cloneGraph = (graph) => {
  if(!graph) return graph;

  let map = {};

  let traverse = (node) => {
    if(!map[node.label]) {
      let newNode = new UndirectedGraphNode(node.label);
      map[node.label] = newNode;
      newNode.neighbors = node.neighbors.map(traverse);
    }
    return map[node.label];
  }

  return traverse(graph);
}

