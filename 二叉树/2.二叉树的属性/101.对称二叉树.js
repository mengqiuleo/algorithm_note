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
 * @return {boolean}
 */

//# 递归
var isSymmetric = function(root) {
  const compareNode = function(left,right) {
    if(left===null && right!==null||left!==null&&right===null){
      return false;
    }else if(left===null&&right===null){
      return true;
    }else if(left.val!==right.val){
      return false;
    }
    let outSide=compareNode(left.left,right.right);
    let inSide=compareNode(left.right,right.left);
    return outSide&&inSide;
  }

  if(root===null){
    return true;
  }
  return compareNode(root.left,root.right);
};


//#队列迭代
var isSymmetric = function(root) {
  if(root === null){
    return true;
  }
  let queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while(queue.length){
    let leftNode = queue.shift();
    let rightNode = queue.shift();
    if(leftNode===null&&rightNode===null){// 左节点为空、右节点为空，此时说明是对称的
      continue;
    }
    //此时已经知道左孩子和右孩子不均为空,那么只要有一个节点为空，或值不相等，返回false
    if(leftNode===null||rightNode===null||leftNode.val!=rightNode.val){
      return false;
    }
    queue.push(leftNode.left);
    queue.push(rightNode.right);
    queue.push(leftNode.right);
    queue.push(rightNode.left);
  }
  return true;
};


//# 栈实现
var isSymmetric = function(root) {
  if(root === null){
    return true;
  }
  let stack = [];
  stack.push(root.left);
  stack.push(root.right);
  while(stack.length){
    let leftNode = stack.pop();
    let rightNode = stack.pop();
    if(leftNode===null&&rightNode===null){// 左节点为空、右节点为空，此时说明是对称的
      continue;
    }
    //此时已经知道左孩子和右孩子不均为空,那么只要有一个节点为空，或值不相等，返回false
    if(leftNode===null||rightNode===null||leftNode.val!=rightNode.val){
      return false;
    }
    stack.push(leftNode.left);
    stack.push(rightNode.right);
    stack.push(leftNode.right);
    stack.push(rightNode.left);
  }
  return true;
};