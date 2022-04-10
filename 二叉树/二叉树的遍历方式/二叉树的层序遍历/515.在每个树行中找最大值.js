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
 * @return {number[]}
 */

/**
 * 
 * 层序遍历，取每一层的最大值
 */
var largestValues = function(root) {
  let res = [],queue = [];
  queue.push(root);
  if(!root) {
    return res;
  }
  while(queue.length!==0) {
    //将最大值设置为队列的第一个元素的值
    let max = queue[0].val;
    let length = queue.length;
    for(let i=0;i<length;i++){
      let node = queue.shift();
      max = max > node.val ? max : node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(max);
  }
  return res;
};