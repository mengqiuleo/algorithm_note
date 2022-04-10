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
 * 
 * 只有当左右孩子都为空的时候，才说明遍历的最低点了。如果其中一个孩子为空则不是最低点
 */
var minDepth = function(root) {
  let res = [],queue = [];
  queue.push(root);
  if(!root) {
    return res;
  }
  let depth = 0;
  while(queue.length!==0) {
    let length = queue.length;
    depth++;
    for(let i=0;i<length;i++){
      let node = queue.shift();
      if(node.left === null && node.right === null){
        return depth;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return depth;
};