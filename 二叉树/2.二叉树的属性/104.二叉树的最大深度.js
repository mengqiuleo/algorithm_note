/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//# 层序遍历
var maxDepth = function(root) {
  let queue = [];
  queue.push(root);
  if(!root){
    return 0;
  }
  let height = 0;
  while(queue.length){
    let length = queue.length;
    height++;
    for(let i=0;i<length;i++){
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return height;
};

//# 递归
var maxDepth = function(root) {
  const getdepth = function(root){
    if(!root){
      return 0;
    }
    let leftdepth = getdepth(root.left);
    let rightdepth = getdepth(root.right);
    let depth = 1 + Math.max(leftdepth,rightdepth);
    return depth;
  }
  let maxdepth = getdepth(root);
  return maxdepth;
};