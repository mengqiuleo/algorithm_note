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


/**
 * 采用层序遍历，二叉树的最大深度就是 它的层数
 *
 */

//# 层序遍历
var maxDepth = function(root) {
  let queue = [];
  queue.push(root);
  if(!root){
    return 0;
  }
  let height=0;//二叉树的高度
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