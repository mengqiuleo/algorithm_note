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
 * 
 * 层序遍历，只不过在单层遍历的时候记录一下本层的头部节点，
 * 然后在遍历的时候让前一个节点指向本节点就可以了
 */
var connect = function(root) {
  let queue = [];
  queue.push(root);
  if(!root) {
    return root;
  }
  while(queue.length!==0){
    let length = queue.length;
    for(let i=0;i<length;i++){
      let node = queue.shift();
      if(i<length-1){//设置next到倒数第二个节点
        node.next = queue[0];
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};