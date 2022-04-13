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
var sumOfLeftLeaves = function(root) {
  const nodesSum = function(node) {
    if(node === null) {
      return 0;
    }
    let leftValue = sumOfLeftLeaves(node.left);
    let rightValue = sumOfLeftLeaves(node.right);
    //单层循环逻辑
    let midValue = 0;
    if(node.left && !node.left.left && !node.left.right) {
      midValue = node.left.val;
    }
    let sum = midValue + leftValue + rightValue;
    return sum;
  }
  return nodesSum(root);
};


//# 迭代
var sumOfLeftLeaves = function(root) {
  if(root === null) {
    return 0;
  }
  let queue = [];
  let sum = 0;
  queue.push(root);
  while(queue.length) {
    let node = queue.shift();
    if(node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return sum;
};