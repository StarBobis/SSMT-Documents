# 🔧 深入解析：OR Fix 与 NN Fix

由 **LeoTorreZ** 大佬开发的 GIMI 内置 CommandList 神器！🛠️

> 🔗 **下载链接**: [ORFix.ini](http://github.com/LeoTorreZ/LeoTools/blob/main/releases/ORFix.ini)

## 📖 它们是做什么的？

简单来说，**XXMI Tools** 生成的 Mod 都遵循一套固定的规则：它会根据贴图类型，将贴图分配到固定的槽位上。

但问题来了：游戏本身 Shader 使用的槽位并不是固定的！🤯

这时候就需要 **OR Fix** 和 **NN Fix** 出场了。它们就像是交通指挥官 👮‍♂️，负责把 Mod 中固定槽位的贴图，“搬运”并修复到游戏 Shader 实际需要的正确槽位上。

## 📋 如何使用？

通常情况下，你只需要确保安装了它们即可。

> 📚 **详细指南**: [ORFix Guide](https://github.com/leotorrez/LeoTools/blob/main/guides/ORFixGuide.md)

---

## ❓ 常见问题：为什么 Mod 切换瞬间会发绿？🤢

你是否遇到过这种情况：切换角色时，Mod 会瞬间变绿，大概 1 秒后才恢复正常？

### 💥 原因揭秘
这是因为 **OR Fix** 还没能完全覆盖所有情况，导致贴图槽位在不同的 Shader 之间“乱窜”了。

### 🛠️ 解决方案

#### 1. 佛系等待 (推荐普通玩家) 🍵
一般情况下，只能等待 GIMI 维护者更新 OR Fix。
但这需要对 **每个角色** 在 **每个场景** 下的 Shader 都进行适配，这是一个漫长且枯燥的过程（纯纯的 Dump + 测试体力活 💦）。

#### 2. 自己动手 (硬核 Mod 作者) 💪
如果你急需修复这个问题，可以尝试自己动手！

**原理**：
你需要 Dump 下出问题的 Shader，找到槽位发生变动的 Vertex Shader (VS) 或 Pixel Shader (PS) 的哈希值，然后根据 OR Fix 的原理，手动为它添加 `filter`。

**示例代码 (`ini` 配置)**：

```ini
[ShaderOverrideLinShi3]
; ❄️ 冻结状态修复
hash = 771c5f12e8030f7b
filter_index = 037731.6
allow_duplicate_hash = overrule

[ShaderOverrideLinShi5]
; 🧙‍♀️ 艾莉丝修复
hash = ce9b02ce7c492e61
filter_index = 037731.2
allow_duplicate_hash = overrule

[ShaderOverrideLinShi6]
; 👤 雅珂达修复
hash = 022f794ed52f4a86
filter_index = 037731.2
allow_duplicate_hash = overrule

[ShaderOverrideLinShi8]
; 🐋 丝柯克修复
hash = c2e1eda3fffb6227
filter_index = 037735
allow_duplicate_hash = overrule

[ShaderOverrideLinShi9]
; 🐋 丝柯克切换修复
hash = 138d9621d233ef45
filter_index = 037731.2
allow_duplicate_hash = overrule

[ShaderOverrideLinShi10]
; 🤖 桑多涅修复
hash = 430768ed8824018d
filter_index = 037731.2
allow_duplicate_hash = overrule

[ShaderOverrideLinShi11]
; 🤖 桑多涅修复2
hash = ddaec2658181e13c
filter_index = 037731.1
allow_duplicate_hash = overrule

[ShaderOverrideLinShi12]
; 🔥 安柏修复
hash = 7015f9024671ecb2
filter_index = 037731.6
allow_duplicate_hash = overrule

[ShaderOverrideLinShi13]
; 🔥 安柏轮廓修复
hash = ca15e550c2774d95
filter_index = 037730.0
allow_duplicate_hash = overrule

[ShaderOverrideLinShi14]
; ⚡ 刻晴切换轮廓修复
hash = e85582905b34e867
filter_index = 037730.0
allow_duplicate_hash = overrule

[ShaderOverrideLinShi15]
; 🐱 爱可菲切换修复
hash = c8678d91a593f65c
filter_index = 037731.4
allow_duplicate_hash = overrule
```

**💡 小建议**：
*   上面的示例使用的是 **VS (顶点着色器)**。但 VS 可能会在多个角色间共用，容易误伤。
*   更推荐使用 **PS (像素着色器)** 进行精确修复，虽然工作量会更大一些，但更稳妥！

---

## 📝 总结

*   **普通玩家**：遇到发绿问题，请耐心等待 **GIMI-Package** 的更新。
*   **Mod 作者**：如果急需修复，请仔细阅读 OR Fix 源码，理解原理后自行添加 Shader Filter。

Happy Modding! 🚀

