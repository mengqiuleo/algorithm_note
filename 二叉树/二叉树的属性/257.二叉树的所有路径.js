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
 * @return {string[]}
 */

//# 递归
var binaryTreePaths = function(root) {
  let res = [];
  const getPath = function(node,curPath) {
    if(node.left === null && node.right === null) {
      curPath += node.val;
      res.push(curPath);
      return;
    }
    curPath += node.val + '->';
    node.left && getPath(node.left,curPath);
    node.right && getPath(node.right,curPath);
  }
  getPath(root,'');
  return res;
};

//# 迭代
//? 待完善，不太懂！！！
var binaryTreePaths = function(root) {
  if(!root) {
    return [];
  }
  const stack = [],path = [''],res = [];
  stack.push(root);
  while(stack.length) {
    const node = stack.pop();
    let path = paths.pop();
  }
};