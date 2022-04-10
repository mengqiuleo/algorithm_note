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
 * @return {TreeNode}
 */

//# 递归
// 这里使用前序遍历，后序遍历也可以，只有中序遍历不行
var invertTree = function(root) {
  //功能函数：交换节点函数
  const invertNode =  function(root,left,right) {
    let temp = left;
    left = right;
    right = temp;
    //重新给root赋值
    root.left =  left;
    root.right = right;
  }
  //确定终止条件
  if(root === null) {
    return root;
  }
  //确定节点处理逻辑 交换
  invertNode(root.left, root.right);
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

//# 层序遍历
var invertTree = function(root) {
  //功能函数：交换节点函数
  const invertNode =  function(root,left,right) {
    let temp = left;
    left = right;
    right = temp;
    //重新给root赋值
    root.left =  left;
    root.right = right;
  }

  //使用层序遍历
  let queue = [];
  if(root === null) {
    return root;
  }
  queue.push(root);
  while(queue.length) {
    let length = queue.length;
    for(let i=0;i<length;i++){
      let node = queue.shift();
      invertNode(node,node.left,node.right);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};