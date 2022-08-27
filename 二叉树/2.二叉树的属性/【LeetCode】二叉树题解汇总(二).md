## 257. 二叉树的所有路径

[257. 二叉树的所有路径](https://leetcode.cn/problems/binary-tree-paths/)

```js
var binaryTreePaths = function(root) {
    let res = [];
    const getPath = function(node, curPath){
        if(node.left===null && node.right===null){
            curPath += node.val;
            res.push(curPath);
            return;
        }
        curPath += node.val + '->';
        node.left && getPath(node.left,curPath);
        node.right && getPath(node.right,curPath);
    }
    getPath(root,'');
    return res;
};
```

**暗含回溯**
结合上图，这里其实暗含回溯，遍历完左子树，构建出合格的路径，加入解集，遍历右子树之前，路径要撤销最末尾的选择，如果path用的是数组，就会弹出最后一项。
我这里用的字符串，pathStr保存了当前节点的路径，递归右子树时，传入它即可，它不包含在递归左子树所拼接的东西。

**闲扯一些别的**
如果有人问你，前中后序遍历的区别是什么？他可能不希望你回答根左右之类的，他希望你抓住实质，他会继续问你为什么。

而且如果你回答：中序遍历是先访问左子树，再访问根节点。可能会觉得你人云亦云，or没想明白，or表述模糊。

中序遍历也是先访问根节点，再左子树，再右子树，只是将 do something with root（对节点进行处理）放在访问完左子树之后。

因为 DFS 遍历，每个节点有 3 次不同的驻留阶段，在其中一个时间点拿当前节点做事，就分别对应前中后遍历。如下图。

> Preorder, Postorder and Inorder are all based on DFS.
> The only difference is:
> During the traversal, what time they will access the content of a node.
> Because a node is actually visited 3 times for binary tree. They include: the time before the first DFS call, and the times after each DFS call.

![](E:\algorithm_note\二叉树\2.二叉树的属性\图片\257.png)

引用参考文章：[谈谈别的，前、中、后序遍历的区别只有一点](https://leetcode.cn/problems/binary-tree-paths/solution/tu-jie-er-cha-shu-de-suo-you-lu-jing-by-xiao_ben_z/)

**问题：**

 为什么用字符串保存的就是当前节点的路径，字符串不能变，指向变了啊？

我觉得你应该没了解到递归的本质，系统在每一次递归调用的时候都会开辟一段新的栈空间，用于保存当前的状态（比如这里就需要保存当前路径的字符串），当调用返回时就可以恢复到原来的状态。比如说处理完节点1，然后递归处理完1的左子树之后（处理完意思是处理了左子树包含的所有节点），再返回时，当时处理节点1时保存了字符串“1->”，所以下一步递归处理1的右子树时，字符串又是从“1->”开始的，1的左子树的结果并不会影响这里的递归调用，这就是回溯，所以递归天然伴随着回溯。

**我的理解是，pathStr += root.val包含了变更string指针的操作，所以每一层递归指向的都是不同的string。 而用list的话，并没有New一个新的list对象，所有的递归层都在对同一个list操作，因此需要手动回溯。是这样吗？**

 我也是这么觉得。字符串是拷贝过去的，相当于新建了一个变量。