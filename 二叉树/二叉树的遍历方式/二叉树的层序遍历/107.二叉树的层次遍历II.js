/**
 * 和层次遍历基本相同，只不过是最后分会数组之前先翻转
 */

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = [],queue = [];
  queue.push(root);
  if(!root) {
    return res;
  }
  while(queue.length) {
    let length = queue.length;
    let curLevel = [];
    for(let i=0;i<length;i++){
      let node = queue.shift();
      curLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    //从数组最前面插入值，可以避免最后翻转数组
    res.unshift(curLevel);
  }
  return res;
};