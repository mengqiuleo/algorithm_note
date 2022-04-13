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

//# 辅助数组解决
var isValidBST = function(root) {
  let arr = [];
  const buildArr = (root) => {
    if(root) {
      buildArr(root.left);
      arr.push(root.val);
      buildArr(root.right);
    }
  }
  buildArr(root);
  for(let i=1;i<arr.length;i++) {
    if(arr[i] <= arr[i-1]) {
      return false;
    }
  }
  return true;
};

//# 递归
var isValidBST = function(root) {
  let pre = null;
  //这里的遍历顺序是中序遍历
  const inOrder = (root) => {
    if(root === null) {
      return true;
    }
    let left = inOrder(root.left);//左

    if(pre !== null && pre.val >= root.val) {
      return false;
    }
    pre = root;

    let right = inOrder(root.right);//右

    return left && right;
  }
  return inOrder(root);
};