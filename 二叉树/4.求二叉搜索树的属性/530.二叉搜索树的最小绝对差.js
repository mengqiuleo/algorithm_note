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

//# 转换为数组
var getMinimumDifference = function(root) {
  let arr = [];
  const buildArr = (root) => {
    if(root) {
      buildArr(root.left);
      arr.push(root.val);
      buildArr(root.right);
    }
  } 
  buildArr(root);
  let diff = arr[arr.length-1];
  for(let i=1;i<arr.length;i++) {
    if(diff > arr[i]-arr[i-1]) {
      diff = arr[i]-arr[i-1];
    }
  }
  return diff;
};

//# 中序遍历求最小值
var getMinimumDifference = function(root) {
  let res = Infinity;
  let preNode = null;
  //中序遍历
  const inOrder = (node) => {
    if(!node) {
      return ;
    }
    inOrder(node.left);
    if(preNode) {
      res = Math.min(res, node.val-preNode.val);
    }
    preNode = node;
    inOrder(node.right);
  }
  inOrder(root);
  return res;
};
