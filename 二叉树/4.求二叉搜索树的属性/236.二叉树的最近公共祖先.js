/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//# 递归
//? 这个题不太懂，为什么左右子树都不空的时候，返回的就是根元素呢？
var lowestCommonAncestor = function(root, p, q) {
  const travelTree = function(root,p,q) {
    if(root === null || root === p || root === q) {
      return root;
    }
    let left = travelTree(root.left,p,q);
    let right = travelTree(root.right,p,q);
    if(left !== null && right !== null) {
      return root;
    }
    if(left === null) {
      return right;
    }
    return left;
  }    
  return travelTree(root,p,q);
};