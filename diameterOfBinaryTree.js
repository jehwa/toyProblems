/**
 * Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

 */

let diameterOfBinaryTree = (root) => {
  let output = 0;
  if(!root) {
    return output;
  }

  let findDepth = (node) => {
    let leftD, rightD;
    leftD = node.left ? 1 + findDepth(node.left) : 0;
    rightD = node.right ? 1 + findDepth(node.right) : 0;
    output = Math.max(output, leftD + rightD);
    return Math.max(leftD, rightD);
  }

  findDepth(root);
  return output;

}