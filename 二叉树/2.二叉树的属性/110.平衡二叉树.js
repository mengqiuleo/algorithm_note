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
 * @return {boolean}
 */

//# 递归
var isBalanced = function(root) {
  const getDepth = function(node) {
    if(node === null) {
      return 0;
    }
    let leftDepth = getDepth(node.left);//左子树高度
    // 当判定左子树不为平衡二叉树时,即可直接返回-1
    if(leftDepth === -1) {
      return -1;
    }
    
    let rightDepth = getDepth(node.right);//求右子树高度
    // 当判定右子树不为平衡二叉树时,即可直接返回-1
    if(rightDepth === -1) {
      return -1;
    }
    if(Math.abs(leftDepth - rightDepth) > 1){
      return -1;
    } else {
      //如果差值小于等于1，则返回当前二叉树的高度
      return 1 + Math.max(leftDepth,rightDepth);// 以当前节点为根节点的树的最大高度
    }

  }
  return !(getDepth(root) === -1);
};