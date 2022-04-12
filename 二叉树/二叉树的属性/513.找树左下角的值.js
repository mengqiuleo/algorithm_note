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

//# 递归
var findBottomLeftValue = function(root) {
  let maxpath = 0,resNode = null;
  const dfsTree = function(node,curPath) {
    if(!node.left && !node.right) {
      if(curPath > maxpath) {
        maxpath = curPath;
        resNode = node.val;
      }
      return;
    }
    node.left && dfsTree(node.left,curPath + 1);
    node.right && dfsTree(node.right,curPath + 1);
  }
  dfsTree(root,1);
  return resNode;
};

//# 层序遍历
var findBottomLeftValue = function(root) {
  let queue = [];
  if(!root) {
    return null;
  }
  queue.push(root);
  let resNode = null;
  while(queue.length) {
    let length = queue.length;
    for(let i=0;i<length;i++) {
      let node = queue.shift();
      if(i === 0) {
        resNode = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return resNode;
};