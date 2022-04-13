/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//# 递归                  (中序遍历,后序遍历)
var buildTree = function(inorder, postorder) {
  if(!postorder.length) {
    return null;
  }
  const rootVal = postorder.pop();//取后序遍历的最后一个元素的值，就是中序遍历的区分点
  let rootIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);//创建中间节点
  //这里的rootIndex就可以代表有几个元素,所以后序遍历的切割就可以依据该rootIndex
  root.left = buildTree(inorder.slice(0,rootIndex),postorder.slice(0,rootIndex));
  root.right = buildTree(inorder.slice(rootIndex + 1),postorder.slice(rootIndex));
  return root;
};