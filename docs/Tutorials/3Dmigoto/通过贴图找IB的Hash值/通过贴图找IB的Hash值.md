部分模型存在时间极短，如角色释放的一些特殊动作。此时，如果老实地使用 Hunting 模式下的 `Num7`、`Num8` 切换查找 IB，会发现根本来不及。

此时可以尝试生成帧分析目录（即 FrameAnalysis），不依靠游戏的实时渲染查找：

首先在游戏中，按下 `Num0` 打开 Hunting 模式，然后按下 `Num+` 以重置当前 Hunting，等待目标物体出现的一瞬间按下 `F8` 以 dump 之；

随后可以在 3Dmigoto 根目录下找到这个新生成的 FrameAnalysis 文件夹，然后翻找目标物体可能对应的 `.dds` 贴图文件。找到之后，观察贴图文件名起始的 DrawCall 六位十进制数，如 `000066`，接下来在相同文件夹中找到名称形如 `000066-ib=1234abcd... .txt` 的文件，就得到了所需的 IB hash。
