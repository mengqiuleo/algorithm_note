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
 * @return {number[]}
 */
//# 使用map
var findMode = function(root) {
  let map = new Map();
  const traverTree = function(root) {
    if(root === null) {
      return ;
    }
    traverTree(root.left);

    map.set(root.val,map.has(root.val)?map.get(root.val)+1:1);
    
    traverTree(root.right);
  }
  traverTree(root);

  //定义一个最大值，初始化为root.val
  let maxCount = map.get(root.val);
  let res = [];
  for(let [key,value] of map) {
    if(value === maxCount) {
      res.push(key);
    }
    if(value > maxCount) [
      res = [],
      maxCount = value,
      res.push(key)
    ]
  }
  return res;
};

//# 不使用map
var findMode = function(root) {
  let count =0,maxCount = 1;
  let pre = root,res = [];
  const traverTree = function(cur) {
    if(cur===null) {
      return ;
    }
    traverTree(cur.left);

    if(pre.val === cur.val) {
      count++;
    } else {
      count = 1;
    }
    pre = cur;
    if(count === maxCount) {
      res.push(cur.val);
    }
    if(count > maxCount) {
      res = [];
      maxCount = count;
      res.push(cur.val);
    }
    traverTree(cur.right);
  }
  traverTree(root);
  return res;
};