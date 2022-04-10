/**
 * 层序遍历：借助队列
 */

var levelOrder = function(root) {
  let res = [],queue = [];
  queue.push(root);
  if(!root) {
    return res;
  }
  while(queue.length!==0) {
    //记录当前层级节点数,其实length是不断变化的
    let length = queue.length;
    //存放每一层的节点
    let curLevel = [];
    for(let i=0;i<length;i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      //存放当前层下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    //把每一层的结果放到最终结果的数组中
    res.push(curLevel);
  }
  return res;
};