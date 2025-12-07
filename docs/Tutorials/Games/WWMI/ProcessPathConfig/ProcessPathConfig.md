# ⚙️ 主页配置

游戏预设选择 `WWMI`

进程路径填写为：`Client-Win64-Shipping.exe`

> ⚠️ **注意**：请确保文件名完全匹配，区分大小写。
>
> 启动路径要么不填，要么填写官方启动器的路径，否则无法正确注入。

# 🚀 官方启动器设置

对于鸣潮这个游戏，我们需要设置为 **DX11** 启动：

![alt text](image.png)

> ⚠️ **警告**：如果不勾选 DX11 启动的话，到游戏里就会出现这个报错：
>
> ![alt text](03e29ccb44002b14b84d716e8cbe5f38.png)

# ▶️ 启动过程

启动游戏的过程就是先点击右下角的 **开始游戏**，然后通过游戏的启动器来启动游戏就行了。

# ⚡ 如何一键启动?

如下配置，即可如同其他游戏一样快捷启动。

**进程路径**：
```bash
"X:\path\to\Wuthering Waves\Wuthering Waves Game\Client\Binaries\Win64\Client-Win64-Shipping.exe"
```

**启动路径**：
```bash
"X:\path\to\Wuthering Waves\launcher.exe"
```

**启动参数**：
```
-d3d11
```

> 💡 **小知识**：这里的启动参数 `-d3d11` 是 Unreal 引擎开发游戏时保留的参数，对于使用 d3d12 开发的游戏，如果游戏作者并无打算保留 d3d11 接口，此处命令则无效。
>
> *举例：蔡浩宇的 AI 聊天游戏、无限暖暖。*



