# 问题描述
如果用普通的IB隐藏，或VB隐藏，就会出现隐藏一个其它的也跟着被隐藏了的问题：

![alt text](image.png)

但是如果使用对应的槽位隐藏，就会隐藏掉所有的脸部，以及其它角色的眉毛：

![alt text](image-1.png)

![alt text](image-2.png)

# 解决方案

![alt text](image-3.png)

上面仆人的Position槽位检测到之后，就把变量设为1，等skip脸部之后再把变量设回去