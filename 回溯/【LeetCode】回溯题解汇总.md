# 【LeetCode】回溯题解汇总

[TOC]



## 77. 组合

[77. 组合](https://leetcode.cn/problems/combinations/)

给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。

你可以按 **任何顺序** 返回答案。

示例 1：

```
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```


示例 2：

```
输入：n = 1, k = 1
输出：[[1]]
```

**题解思路**

![](./图片/77.png)

定义两个全局变量，一个用来存放符合条件单一结果，一个用来存放符合条件结果的集合。

需要一个参数，为变量startIndex，它控制每一层遍历的起点。在集合[1,2,3,4]取1之后，下一层递归，就要在[2,3,4]中取数了，那么下一层递归如何知道从[2,3,4]中取数呢，靠的就是startIndex。

path这个数组的大小如果达到k，说明我们找到了一个子集大小为k的组合了。

**剪枝**

举一个例子，n = 4，k = 4的话，那么第一层for循环的时候，从元素2开始的遍历都没有意义了。 在第二层for循环，从元素3开始的遍历都没有意义了。

![](./图片/77.1.png)

**可以剪枝的地方就在递归中每一层的for循环所选择的起始位置**。

**如果for循环选择的起始位置之后的元素个数 已经不足 我们需要的元素个数了，那么就没有必要搜索了**。

优化过程如下：

1. 已经选择的元素个数：path.size();
2. 还需要的元素个数为: k - path.size();
3. 在集合n中至多要从该起始位置 : n - (k - path.size()) + 1，开始遍历

为什么有个+1呢，因为包括起始位置，我们要是一个左闭的集合。

举个例子，n = 4，k = 3， 目前已经选取的元素为0（path.size为0），n - (k - 0) + 1 即 4 - ( 3 - 0) + 1 = 2。

从2开始搜索都是合理的，可以是组合[2, 3, 4]。

```js
let path = [];
let result = [];
var combine = function(n, k) {
    result = [];
    combineHelper(n,k,1);
    return result;
};

const combineHelper = (n,k, startIndex) => {
    if(path.length === k){
        result.push([...path]);
        return;
    }
    for(let i=startIndex; i<=n-(k-path.length)+1; i++){
        path.push(i);
        combineHelper(n,k,i+1);
        path.pop();
    }
}
```



## 216. 组合总和 III

[216. 组合总和 III](https://leetcode.cn/problems/combination-sum-iii/)

找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

只使用数字1到9
每个数字 最多使用一次 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

 

示例 1:

```
输入: k = 3, n = 7
输出: [[1,2,4]]
解释:
1 + 2 + 4 = 7
没有其他符合的组合了。
```


示例 2:

```
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
解释:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
没有其他符合的组合了。
```


示例 3:

```
输入: k = 4, n = 1
输出: []
解释: 不存在有效的组合。
在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。
```

**题解思路**

![](./图片/216.png)

```js
let result = [];
let path = [];
const backtracking = (targetSum,k,sum,startIndex) => {
    if(sum > targetSum){
        return;
    }
    if(path.length === k){
        if(sum === targetSum) result.push([...path]);
        return;
    }
    for(let i=startIndex; i<=9-(k-path.length)+1; i++){
        sum += i;
        path.push(i);
        backtracking(targetSum,k,sum,i+1);
        sum -= i;
        path.pop();
    }
}

var combinationSum3 = function(k, n) {
    result = [];
    backtracking(n,k,0,1);
    return result;
};
```

