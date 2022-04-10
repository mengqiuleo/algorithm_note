/**
 // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
//# 递归
var maxDepth = function(root) {
  const getdepth = function(root){
    if(!root){
      return 0;
    }
    let depth = 0;
    for(let item of root.children){
      depth = Math.max(depth,getdepth(item));
    }
    return depth + 1;
  }
  let maxdepth = getdepth(root);
  return maxdepth;
};

//# 层序遍历
var maxDepth = function(root) {
  let queue = [];
  queue.push(root);
  if(!root){
    return 0;
  }
  let depth = 0;
  while(queue.length){
    let length = queue.length;
    depth++;
    while(length--){
      let node = queue.shift();
      for(let item of node.children){
        item && queue.push(item);
      }
    }
  }
  return depth;
};