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

//# 前序遍历
/**
 * 入栈时：右子树先入栈，然后左子树入栈
 * 出栈：中 -> 左 -> 右
 * 前序遍历是中左右，每次先处理的是中间节点，那么先将根节点放入栈中，然后将右孩子加入栈，再加入左孩子。
 */
var preorderTraversal = function(root) {
  const res = [];
  if(!root) {
    return res;
  }
  const stack = [];
  stack.push(root);//前序遍历起初要把根节点放入栈中，因为前序遍历的遍历顺序和要输出元素的顺序相同
  let cur = null;
  while(stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return res;
}

//# 中序遍历
/**
 * 入栈：左 -> 右
 * 出栈：左 -> 中 -> 右
 * 先访问的是二叉树顶部的节点，然后一层一层向下访问，直到到达树左面的最底部，再开始处理节点
 * 处理顺序和访问顺序是不一致的
 */
var inorderTraversal = function(root) {
  const res = [];
  if(!root) {
    return res;
  }
  const stack = [];
  let cur = root;//指针用来访问节点
  while(stack.length || cur) {
    if(cur) {
      stack.push(cur);
      cur = cur.left;//一直访问左子树
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};

//# 后序遍历
/**
 * 先序：中左右 --> 中右左 --> 翻转数组: 左右中
 * 后序遍历代码与前序遍历代码类似，只不过是将要返回的数组进行翻转
 */
var postorderTraversal = function(root) {
  const res = [];
  if(!root) {
    return res;
  }
  const stack = [root];
  let cur = null;
  do {
    cur = stack.pop();
    res.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  } while(stack.length);
  return res.reverse();
};