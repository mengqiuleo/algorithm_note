#### [剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

[思路](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/#)

难度简单348收藏分享切换为英文接收动态反馈

请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。

 

**示例 1：**

```
输入：s = "We are happy."
输出："We%20are%20happy."
```



- i指向原字符串
- split 与 join 功能相反

```js
var replaceSpace = function(s) {
    s = s.split('');
    let len = s.length;
    let count = 0;
    for(let i=0; i<len; i++){
        if(s[i] == ' ') count++;
    }
    s.length += count*2;
    for(let i=len-1, j=s.length-1; i>=0; i--,j--){
        if(s[i] != ' ') s[j] = s[i];
        else {
            s[j-2] = '%';
            s[j-1] = '2';
            s[j] = '0';
            j -= 2;
        }
    }
    return s.join('');
};
```

