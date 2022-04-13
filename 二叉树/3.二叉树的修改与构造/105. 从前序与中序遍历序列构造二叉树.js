/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 
//# 递归
var buildTree = function(preorder, inorder) {
  if(!preorder.length) {
    return null;
  }
  const rootVal = preorder.shift();// 从前序遍历的数组中获取中间节点的值， 即数组第一个值
  const index = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);
  root.left = buildTree(preorder.slice(0,index),inorder.slice(0,index));
  root.right = buildTree(preorder.slice(index),inorder.slice(index + 1));
  return root;
};