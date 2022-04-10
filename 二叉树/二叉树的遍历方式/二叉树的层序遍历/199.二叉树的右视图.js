/**
 * 
 * 层序遍历的时候，判断是否遍历到单层的最后面的元素，
 * 如果是，就放进result数组中，随后返回result就可以了。
 */
var rightSideView = function(root) {
  let res = [],queue = [];
  queue.push(root);
  if(!root) {
    return res;
  }
  while(queue.length!==0) {
    let length = queue.length;
    for(let i=0;i<length;i++) {
      let node = queue.shift();
      //此时表明已经遍历到了每一层的最后一个元素
      if(i === length-1) {
        res.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};