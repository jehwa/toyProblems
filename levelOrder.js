/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

let levelOrder = root => {
  let output = [];
  let traverse = (node, level) => {
    output[level] = output[level] || [];
    output[level].push(node.val);
    if(root.right) {
      traverse(root.right, level + 1);
    }
    if(root.left) {
      traverse(root.left, level +1);
    }
  }
  traverse(root, 0);

  return output;
}