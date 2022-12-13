找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

**答案解析**

```js
var findRepeatNumber = function(nums) {
    const map = new Map();
    //for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值
    //for in总是得到对象的key或数组、字符串的下标
    //for of总是得到对象的value或数组、字符串的值
    for(let num of nums){
        if(map.has(num)){
            return num;
        }
        map.set(num,1);
    }
};
```

