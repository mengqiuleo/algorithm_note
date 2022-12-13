#### [剑指 Offer 04. 二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

[思路](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/#)

难度中等792收藏分享切换为英文接收动态反馈

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 

**示例:**

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 target = `5`，返回 `true`。

给定 target = `20`，返回 `false`。



**答案**

- 从右上角开始搜索

```js
var findNumberIn2DArray = function(matrix, target) {
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return false;
    let row = matrix.length - 1, col = matrix[0].length - 1;
    let i = 0, j = col;
    while(i <= row && j >= 0){
        if(matrix[i][j] === target){
            return true;
        } else if(matrix[i][j] > target){
            j--;
        } else if(matrix[i][j] < target){
            i++;
        }
    }
    return false;
};
```

