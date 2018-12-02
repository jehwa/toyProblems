/**
 * 
 * 
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumOfLeftLeaves = (root) => {
    let output = 0;
    if(!root) return output;
    let traverse = (node, direction) => {
      if(direction === 'left') {
        output += node.val;
      }
      if(node.right) {
        traverse(node.right, 'right');
      }
      if(node.left) {
        traverse(node.left, 'left');
      }
    }
    traverse(root);
    return output;
};