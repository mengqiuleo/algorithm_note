/**
 // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

/**
 * 这个题和第116题完全相同
 *  
 */
var connect = function(root) {
  let queue = [];
  queue.push(root);
  if(!root) {
    return root;
  }
  while(queue.length!==0) {
    let length = queue.length;
    for(let i=0;i<length;i++){
      let node = queue.shift();
      if(i<length-1) {
        node.next = queue[0];
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};