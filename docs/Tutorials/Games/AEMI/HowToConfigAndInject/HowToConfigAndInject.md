# 如何注入3Dmigoto到终末地

开始之前确保你的SSMT版本为V3.5.7或以上版本

新建一个任意名称的游戏配置，游戏预设选择AEMI：

![alt text](image.png)

3Dmigoto就用自动下载的，或者你自己的都行：

![alt text](image-1.png)

进程路径和启动路径都填写为你自己的Endfield.exe路径：

![alt text](image-2.png)

启动参数必须是 `-force-d3d11`

额外注入的dll文件选你当前3Dmigoto文件夹下面的d3d11.dll

![alt text](image-3.png)

可以点这个按钮打开当前3Dmigoto文件夹：

![alt text](image-4.png)

配置完成后点击开始游戏，就会开始游戏并注入3Dmigoto

