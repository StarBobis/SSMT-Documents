# 💃 将MMD模型转为Mod流程 - 合并篇

## 🏷️ 顶点组自动改名法

没错，我要开始 **偷懒** 了，你作为萌新，我建议你也先学会 **偷懒** 的方法。😴

所以我们直接从 **偷懒大法** 开始演示。

先分别选中两个模型，点击 <font color="#2196f3">移除未使用的空顶点组</font>。

![alt text](image-38.png)

把处理好的两个模型都显示出来，然后按住 <kbd>Ctrl</kbd>，先选中 <font color="#9c27b0">游戏原模型</font>，再选中你的 <font color="#d97706">MMD模型</font>，**注意先后顺序哦**！

![alt text](image-37.png)

然后点击 <font color="#2196f3">将目标obj的顶点组按位置对应关系改名</font>。

![alt text](image-39.png)

执行完成后，选中我们的 <font color="#d97706">MMD模型</font>，可以看到 **顶点组名称** 都被改过了：

![alt text](image-40.png)

此时我们需要删掉 <font color="#d97706">MMD模型</font> 的手部，使用 <font color="#9c27b0">游戏原模型</font> 的手作为手，偷懒省去刷手的权重。

以及脖子，直接偷懒用 <font color="#9c27b0">原模型</font> 的脖子，防止对不上脖子接缝。

::: tip 💡 经验之谈
反正你第一次做 <font color="#2196f3">Mod</font>，能 **偷懒** 就 **偷懒**，能 **简化** 就 **简化**。
:::

![alt text](image-41.png)

![alt text](image-42.png)

## 🔗 合并模型

在合并 <font color="#d97706">MMD模型</font> 和 <font color="#9c27b0">游戏原模型</font> 之前，需要给 <font color="#d97706">MMD模型</font> 的 **UV** 改名。

![alt text](image-43.png)

改名为 `TEXCOORD.xy`。

随后合并到 <font color="#9c27b0">游戏原模型</font> 上：

![alt text](image-44.png)

## 🎨 合并贴图

此时打开 <font color="#2196f3">Material Combiner</font> 插件（萌新偷懒法，懒得手动拼接了）。

点击 **Generate Material List**。

![alt text](image-45.png)

然后此时我们点击 **Save Atlas To**。

![alt text](image-46.png)

将合并的图片保存到桌面：

![alt text](image-47.png)

此时我们去 **UV** 里查看，就能看到它变成一张大图了：

![alt text](image-48.png)

虽然空间占用很难看，不过我们无所谓了，这就是 **偷懒的代价**。🤷‍♂️
