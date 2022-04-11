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
var countNodes = function(root) {
  const getNodeSum = function(node) {
    if(node === null) {
      return 0;
    }
    let leftNum = getNodeSum(node.left);
    let rightNum = getNodeSum(node.right);
    return leftNum + rightNum + 1;
  }
  return getNodeSum(root);
};

//# 迭代
var countNodes = function(root) {
  let queue = [];
  if(root === null) {
    return 0;
  }
  let nodeNum = 0;
  queue.push(root);
  while(queue.length) {
    let length = queue.length;
    for(let i=0;i<length;i++) {
      let node = queue.shift();
      nodeNum++;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return nodeNum;
    
};