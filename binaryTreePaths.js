let binaryTreePaths = (root) => {
  let output = [];

  if(!root) {
    return output;
  }
  let recursion = (node, path) => {
    if(!node.right && !node.left) {
      output.push(path);
      return;
    }
    if(node.right) {
      recursion(node.right, path + `->${node.right.val}`);
    }
    if(node.left) {
      recursion(node.left, path + `->${node.left.val}`);
    }
  }

  recursion(root,`${root.val}`);
  return output;
}