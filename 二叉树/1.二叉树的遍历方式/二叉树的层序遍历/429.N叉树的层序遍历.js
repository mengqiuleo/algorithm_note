/**
  // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [],queue = [];
  queue.push(root);
  if(!root){
    return res;
  }    
  while(queue.length!==0){
    let length = queue.length;
    let curLevel = [];
    for(let i=0;i<length;i++){
      let node = queue.shift();
      curLevel.push(node.val);
      //这里不再是 node.left node.right 而是循坏node.children
      for(let item of node.children) {
        item && queue.push(item);
      }
    }
    res.push(curLevel);
  }
  return res;
};