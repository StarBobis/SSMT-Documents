# (1) 使用Windows自带的虚拟键盘

快捷键： `Win + Ctrl + O`

![alt text](image.png)

打开虚拟键盘，界面如上。点击 `选项` 按钮，弹出如下窗口，勾选 `打开数字小键盘`：

![alt text](image-1.png)

然后点击 `确认` 以应用更改，即可使用虚拟键盘的小键盘区。

![alt text](image-2.png)

# (2) `d3dx.ini` 中更改键位设置

打开你的 `3dmigoto\d3dx.ini` ，然后去到 `[Hunting]` 项下：

![alt text](image-3.png)

翻阅代码查找，找到绑定至小键盘区的部分：

![alt text](image-4.png)

然后修改这些键位设置的值即可。

如果不清楚该从什么值改为什么值，请查看 `3Dmigoto` 源码里的值的定义：

[https://github.com/bo3b/3Dmigoto/blob/master/vkeys.h](https://github.com/bo3b/3Dmigoto/blob/master/vkeys.h)

![alt text](image-5.png)

# (3) 买个新键盘

（实在不行买个键盘把，拼多多9.9凑合用）
