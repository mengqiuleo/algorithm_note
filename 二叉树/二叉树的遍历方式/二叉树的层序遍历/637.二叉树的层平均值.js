var averageOfLevels = function(root) {
  let res = [],queue = [];
  queue.push(root);
  if(!root) {
    return;
  }
  while(queue.length!==0) {
    let length = queue.length;
    let sum = 0;//sum记录每一层的和
    for(let i=0;i<length;i++) {
      let node = queue.shift();
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(sum/length);
  }
  return res;
};