# 🤔 如何正确选择一键逆向的选项？

在 SSMT 中，针对不同的游戏，我们提供了不同的一键逆向策略。选对选项，事半功倍！🚀

## 🌊 鸣潮 (Wuthering Waves) Mod

鸣潮（即 WWMI）目前仅有一个逆向选项：**`一键逆向Mod的ini`**。

该选项非常强大，可以逆向几乎所有基于 **WWMI-Package** 加载器格式的模型替换 Mod。

![鸣潮逆向选项](image.png)

简单来说，只要是鸣潮的 Mod，选它准没错！✅

## 🎮 其它游戏 Mod

对于 **原神、崩坏三、崩坏：星穹铁道、绝区零、第五人格 (Neox2/Neox3)** 等游戏，我们提供了三个逆向选项，如下图所示：

![其它游戏逆向选项](image-1.png)

这三个选项分别对应不同的 Mod 结构，下面我们来逐一解析，帮你找到最适合的那一个！👇

### 1️⃣ 一键逆向 Mod 的 ini (基础模式)

> **别名**：逆向普通单个 Mod

这个选项主要用于处理 **最基础、最原始** 的 Mod 结构。

*   **适用场景**：
    *   ✅ **单个 Mod**：没有合并其他角色或服装。
    *   ✅ **无按键切换**：没有复杂的 `KeySwap` 逻辑。
    *   ✅ **无分部位绘制**：没有使用 `DrawIndexed` 进行复杂的部位拆分。
    *   ✅ **老旧 Mod**：早期的 GIMI 脚本生成的 Mod 通常都是这种格式。

*   **局限性**：
    *   ❌ 无法处理基于 `DrawIndexed` 分部位的 Mod（无法拆分部位）。
    *   ❌ 无法正确解析复杂的按键切换 Mod。

*   **评价**：虽然功能比较基础，但由于很多新手作者制作的 Mod 依然遵循这种简单结构，所以它至今仍有一席之地。👴

**📝 典型代码示例：**

<details>
<summary>点击展开详细内容</summary>

```ini

;MARK:TextureOverrideVertexLimitRaise
[TextureOverride_1fe8a0c5__VertexLimitRaise]
hash = e3d7a213
override_byte_stride = 40
override_vertex_count = 25316


;MARK:TextureOverrideVB
; 1fe8a0c5 
[TextureOverride_VB_1fe8a0c5__Position]
hash = b7cd56fc
vb0 = Resource1fe8a0c5Position

[TextureOverride_VB_1fe8a0c5__Texcoord]
hash = 83049535
vb1 = Resource1fe8a0c5Texcoord

[TextureOverride_VB_1fe8a0c5__Blend]
hash = b050b2cb
vb1 = Resource1fe8a0c5Blend
handling = skip
draw = 25316, 0


;MARK:TextureOverrideIB
[TextureOverride_IB_1fe8a0c5]
hash = 1fe8a0c5
handling = skip

[TextureOverride_IB_1fe8a0c5__Component1]
hash = 1fe8a0c5
match_first_index = 0
ib = Resource_1fe8a0c5_Component1
ps-t2 = Resource-1fe8a0c5-1-LightMap
ps-t0 = Resource-1fe8a0c5-1-NormalMap
ps-t1 = Resource-1fe8a0c5-1-DiffuseMap
run = CommandList\global\ORFix\ORFix
; [mesh:1fe8a0c5-1-Original] [vertex_count:11237]
drawindexed = 32970,0,0

[TextureOverride_IB_1fe8a0c5__Component2]
hash = 1fe8a0c5
match_first_index = 32970
ib = Resource_1fe8a0c5_Component2
ps-t2 = Resource-1fe8a0c5-2-LightMap
ps-t0 = Resource-1fe8a0c5-2-NormalMap
ps-t1 = Resource-1fe8a0c5-2-DiffuseMap
run = CommandList\global\ORFix\ORFix
; [mesh:1fe8a0c5-2-Original] [vertex_count:13956]
drawindexed = 45006,0,0

[TextureOverride_IB_1fe8a0c5__Component3]
hash = 1fe8a0c5
match_first_index = 77976
ib = Resource_1fe8a0c5_Component3
ps-t2 = Resource-1fe8a0c5-3-LightMap
ps-t0 = Resource-1fe8a0c5-3-NormalMap
ps-t1 = Resource-1fe8a0c5-3-DiffuseMap
run = CommandList\global\ORFix\ORFix
; [mesh:1fe8a0c5-3-Original] [vertex_count:123]
drawindexed = 384,0,0


;MARK:ResourceBuffer
[Resource1fe8a0c5Position]
type = Buffer
stride = 40
filename = Buffer/1fe8a0c5-Position.buf

[Resource1fe8a0c5Texcoord]
type = Buffer
stride = 20
filename = Buffer/1fe8a0c5-Texcoord.buf

[Resource1fe8a0c5Blend]
type = Buffer
stride = 32
filename = Buffer/1fe8a0c5-Blend.buf

[Resource_1fe8a0c5_Component1]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = Buffer/1fe8a0c5-Component1.buf

[Resource_1fe8a0c5_Component2]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = Buffer/1fe8a0c5-Component2.buf

[Resource_1fe8a0c5_Component3]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = Buffer/1fe8a0c5-Component3.buf


;MARK:ResourceTexture
[Resource-1fe8a0c5-2-LightMap]
filename = Texture/1fe8a0c5-2-LightMap.dds

[Resource-1fe8a0c5-2-NormalMap]
filename = Texture/1fe8a0c5-2-NormalMap.dds

[Resource-1fe8a0c5-2-DiffuseMap]
filename = Texture/1fe8a0c5-2-DiffuseMap.dds

[Resource-1fe8a0c5-1-LightMap]
filename = Texture/1fe8a0c5-1-LightMap.dds

[Resource-1fe8a0c5-1-NormalMap]
filename = Texture/1fe8a0c5-1-NormalMap.dds

[Resource-1fe8a0c5-1-DiffuseMap]
filename = Texture/1fe8a0c5-1-DiffuseMap.dds

[Resource-1fe8a0c5-3-LightMap]
filename = Texture/1fe8a0c5-3-LightMap.dds

[Resource-1fe8a0c5-3-NormalMap]
filename = Texture/1fe8a0c5-3-NormalMap.dds

[Resource-1fe8a0c5-3-DiffuseMap]
filename = Texture/1fe8a0c5-3-DiffuseMap.dds


;sha256=755a9957b2c867bfb230ea58df3bf31763ea8336a5adbde430ec958a7f414d18



```

</details>

### 2️⃣ 一键逆向基于 Buffer 的分支 Mod 的 ini (罕见模式)

> **⚠️ 注意**：此选项现在很少使用。

这个选项诞生于 GIMI 仓库第一次出现 **Mod 合并脚本** 的时期。那个脚本通过按键控制变量，进而控制 **Buffer** 的切换来实现 Mod 合并及多模型切换。

*   **适用场景**：
    *   ✅ **基于 Buffer 切换的 Mod**：通过 `if $swapvar == ... vb0 = ...` 这种逻辑切换 Buffer 的 Mod。

*   **局限性**：
    *   ❌ 这种写法的 Mod 现在已经非常少见了，通常只在一些非常古老的合并 Mod 中能看到。

**📝 典型代码示例：**

<details>
<summary>点击展开详细代码</summary>

```ini
; Cyno

; Constants -------------------------

[Constants]
global persist $swapvar = 0
global $active = 0
global $creditinfo = 0

[KeySwap]
condition = $active == 1
key = 5
type = cycle
$swapvar = 0,1
$creditinfo = 0

[Present]

if $active == 1
run = CommandList\TexFx\SupressHullHack
endif

post $active = 0
run = CommandListCreditInfo

; ShaderOverride ---------------------------

; CommandList -------------------------

; Overrides -------------------------

[TextureOverrideCynoPosition]
hash = 226f076e
if $swapvar == 0
	vb0 = ResourceCynoPosition
else if $swapvar == 1
	vb0 = ResourceCynoPosition2
endif
$active = 1

[TextureOverrideCynoBlend]
hash = 6867e0b8
if $swapvar == 0
	vb1 = ResourceCynoBlend
else if $swapvar == 1
	vb1 = ResourceCynoBlend2
endif
handling = skip
draw =  70000,0 

[TextureOverrideCynoTexcoord]
hash = 9ea96ce5
if $swapvar == 0
	vb1 = ResourceCynoTexcoord
else if $swapvar == 1
	vb1 = ResourceCynoTexcoord2
endif

[TextureOverrideCynoVertexLimitRaise]
hash = 75b1de60

[TextureOverrideCynoIB]
hash = af184471
handling = skip
drawindexed = auto

[TextureOverrideCynoHead]
hash = af184471
match_first_index = 0
if $swapvar == 0
	ib = ResourceCynoHeadIB
else if $swapvar == 1
	ib = ResourceCynoHeadIB2
endif
ps-t0 = ResourceCynoHeadDiffuse
ps-t1 = ResourceCynoHeadLightMap
ps-t2 = ResourceCynoHeadShadow

run = CommandList\global\ORFix\ORFix

[TextureOverrideCynoBody]
hash = af184471
match_first_index = 17913
if $swapvar == 0
	ib = ResourceCynoBodyIB
else if $swapvar == 1
	ib = ResourceCynoBodyIB2
endif
ps-t0 = ResourceCynoBodyDiffuse
ps-t1 = ResourceCynoBodyLightMap
ps-t2 = ResourceCynoBodyShadow
ps-t69 = ResourceCynoDressMask

run = CommandList\global\ORFix\ORFix
run = CommandList\TexFx\Transparency.1

[TextureOverrideCynoDress]
hash = af184471
match_first_index = 54627
if $swapvar == 0
	ib = ResourceCynoDressIB
else if $swapvar == 1
	ib = ResourceCynoDressIB2
endif
ps-t0 = ResourceCynoDressDiffuse
ps-t1 = ResourceCynoDressLightMap
ps-t2 = ResourceCynoDressShadow
ps-t69 = ResourceCynoBodyMask

run = CommandList\global\ORFix\ORFix
run = CommandList\TexFx\Transparency.1

[TextureOverrideCynoFaceHeadDiffuse]
hash = 401e43ac
ps-t0 = ResourceCynoFaceHeadDiffuse

; CommandList -----------------------

[CommandListCreditInfo]
if $creditinfo == 0 && $active == 1
	pre Resource\ShaderFixes\help.ini\Notification = ResourceCreditInfo
	pre run = CustomShader\ShaderFixes\help.ini\FormatText
	pre $\ShaderFixes\help.ini\notification_timeout = time + 5.0
	$creditinfo = 1
endif

; Resources -------------------------

[ResourceCynoPosition]
type = Buffer
stride = 40
filename = CynoPosition.buf

[ResourceCynoBlend]
type = Buffer
stride = 32
filename = CynoBlend.buf

[ResourceCynoTexcoord]
type = Buffer
stride = 20
filename = CynoTexcoord.buf

[ResourceCynoHeadIB]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = CynoHead.ib

[ResourceCynoBodyIB]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = CynoBody.ib

[ResourceCynoDressIB]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = CynoDress.ib

[ResourceCynoPosition2]
type = Buffer
stride = 40
filename = CynoPosition2.buf

[ResourceCynoBlend2]
type = Buffer
stride = 32
filename = CynoBlend2.buf

[ResourceCynoTexcoord2]
type = Buffer
stride = 20
filename = CynoTexcoord2.buf

[ResourceCynoHeadIB2]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = CynoHead2.ib

[ResourceCynoBodyIB2]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = CynoBody2.ib

[ResourceCynoDressIB2]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = CynoDress2.ib

[ResourceCynoHeadDiffuse]
filename = CynoHeadDiffuse.dds

[ResourceCynoHeadLightMap]
filename = CynoHeadLightMap.dds

[ResourceCynoHeadShadow]
filename = CynoHeadShadow.dds

[ResourceCynoBodyDiffuse]
filename = CynoBodyDiffuse.dds

[ResourceCynoBodyLightMap]
filename = CynoBodyLightMap.dds

[ResourceCynoBodyShadow]
filename = CynoBodyShadow.dds

[ResourceCynoBodyMask]
filename = CynoBodyMask.dds

[ResourceCynoDressDiffuse]
filename = CynoDressDiffuse.dds

[ResourceCynoDressLightMap]
filename = CynoDressLightMap.dds

[ResourceCynoDressShadow]
filename = CynoDressShadow.dds

[ResourceCynoDressMask]
filename = CynoDressMask.dds

[ResourceCynoFaceHeadDiffuse]
filename = CynoFaceHeadDiffuse.dds

[ResourceCreditInfo]
type = Buffer
data = "Created by annplan"


; .ini generated by GIMI (Genshin-Impact-Model-Importer)
; If you have any issues or find any bugs, please open a ticket at https://github.com/SilentNightSound/GI-Model-Importer/issues or contact SilentNightSound#7430 on discord

```

</details>

### 3️⃣ 一键逆向基于 DrawIndexed 的分支 Mod 的 ini (常用模式) ⭐

> **🔥 推荐**：这是目前最常用、功能最强大的选项！

随着 Mod 技术的迭代，**DrawIndexed** 分部位绘制技术逐渐普及。这个选项就是为了应对这种复杂的 Mod 结构而生的。

*   **核心功能**：
    *   ✅ **智能拆分**：可以将逆向出来的单个 Mod 中的 `DrawIndexed` 拆分成不同的部位，方便后续编辑和使用。
    *   ✅ **兼容性强**：能够解决绝大部分 Mod 的逆向问题。

*   **适用场景**：
    *   ✅ **几乎所有现代 Mod**：尤其是那些使用了分部位绘制、或者结构比较复杂的 Mod。

**📝 典型代码示例：**

<details>
<summary>点击展开详细代码</summary>

```ini

;MARK:TextureOverrideVertexLimitRaise
[TextureOverride_1fe8a0c5__VertexLimitRaise]
hash = e3d7a213
override_byte_stride = 40
override_vertex_count = 70097


;MARK:TextureOverrideVB
; 1fe8a0c5 
[TextureOverride_VB_1fe8a0c5__Position]
hash = b7cd56fc
vb0 = Resource1fe8a0c5Position

[TextureOverride_VB_1fe8a0c5__Texcoord]
hash = 83049535
vb1 = Resource1fe8a0c5Texcoord

[TextureOverride_VB_1fe8a0c5__Blend]
hash = b050b2cb
vb1 = Resource1fe8a0c5Blend
handling = skip
draw = 70097, 0


;MARK:TextureOverrideIB
[TextureOverride_IB_1fe8a0c5]
hash = 1fe8a0c5
handling = skip

[TextureOverride_IB_1fe8a0c5__Component1]
hash = 1fe8a0c5
match_first_index = 0
ib = Resource_1fe8a0c5_Component1
ps-t2 = Resource-1fe8a0c5-1-LightMap
ps-t0 = Resource-1fe8a0c5-1-NormalMap
ps-t1 = Resource-1fe8a0c5-1-DiffuseMap
run = CommandList\global\ORFix\ORFix
; [mesh:1fe8a0c5-1-Original] [vertex_count:11237]
drawindexed = 32970,0,0
; [mesh:1fe8a0c5-1-Original.001] [vertex_count:10644]
drawindexed = 30837,32970,0
; [mesh:1fe8a0c5-1-Original.002] [vertex_count:10597]
drawindexed = 30969,63807,0
; [mesh:1fe8a0c5-1-Original.003] [vertex_count:11237]
drawindexed = 32970,94776,0

[TextureOverride_IB_1fe8a0c5__Component2]
hash = 1fe8a0c5
match_first_index = 32970
ib = Resource_1fe8a0c5_Component2
ps-t2 = Resource-1fe8a0c5-2-LightMap
ps-t0 = Resource-1fe8a0c5-2-NormalMap
ps-t1 = Resource-1fe8a0c5-2-DiffuseMap
run = CommandList\global\ORFix\ORFix
; [mesh:1fe8a0c5-2-Original] [vertex_count:13956]
drawindexed = 45006,0,0
; [mesh:1fe8a0c5-2-Original.001] [vertex_count:12180]
drawindexed = 37452,45006,0

[TextureOverride_IB_1fe8a0c5__Component3]
hash = 1fe8a0c5
match_first_index = 77976
ib = Resource_1fe8a0c5_Component3
ps-t2 = Resource-1fe8a0c5-3-LightMap
ps-t0 = Resource-1fe8a0c5-3-NormalMap
ps-t1 = Resource-1fe8a0c5-3-DiffuseMap
run = CommandList\global\ORFix\ORFix
; [mesh:1fe8a0c5-3-Original] [vertex_count:123]
drawindexed = 384,0,0
; [mesh:1fe8a0c5-3-Original.001] [vertex_count:123]
drawindexed = 384,384,0


;MARK:ResourceBuffer
[Resource1fe8a0c5Position]
type = Buffer
stride = 40
filename = Buffer/1fe8a0c5-Position.buf

[Resource1fe8a0c5Texcoord]
type = Buffer
stride = 20
filename = Buffer/1fe8a0c5-Texcoord.buf

[Resource1fe8a0c5Blend]
type = Buffer
stride = 32
filename = Buffer/1fe8a0c5-Blend.buf

[Resource_1fe8a0c5_Component1]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = Buffer/1fe8a0c5-Component1.buf

[Resource_1fe8a0c5_Component2]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = Buffer/1fe8a0c5-Component2.buf

[Resource_1fe8a0c5_Component3]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = Buffer/1fe8a0c5-Component3.buf


;MARK:ResourceTexture
[Resource-1fe8a0c5-2-LightMap]
filename = Texture/1fe8a0c5-2-LightMap.dds

[Resource-1fe8a0c5-2-NormalMap]
filename = Texture/1fe8a0c5-2-NormalMap.dds

[Resource-1fe8a0c5-2-DiffuseMap]
filename = Texture/1fe8a0c5-2-DiffuseMap.dds

[Resource-1fe8a0c5-1-LightMap]
filename = Texture/1fe8a0c5-1-LightMap.dds

[Resource-1fe8a0c5-1-NormalMap]
filename = Texture/1fe8a0c5-1-NormalMap.dds

[Resource-1fe8a0c5-1-DiffuseMap]
filename = Texture/1fe8a0c5-1-DiffuseMap.dds

[Resource-1fe8a0c5-3-LightMap]
filename = Texture/1fe8a0c5-3-LightMap.dds

[Resource-1fe8a0c5-3-NormalMap]
filename = Texture/1fe8a0c5-3-NormalMap.dds

[Resource-1fe8a0c5-3-DiffuseMap]
filename = Texture/1fe8a0c5-3-DiffuseMap.dds


;sha256=3db9dc22aae0d13a5c7d99a6e49988a25ed651d595aafae09e0f906e7ecdd87d


```
</details>

## 📝 总结

看完上面的介绍，相信你已经对如何选择正确的 Mod 逆向选项有了清晰的认识！💡

**🚀 快速指南：**

1.  **鸣潮 Mod** 👉 直接选 **`一键逆向Mod的ini`**。
2.  **其它游戏 Mod**：
    *   首选 👉 **`一键逆向基于DrawIndexed的分支Mod的ini`** (常用模式)。
    *   如果是非常简单的老 Mod 👉 可以尝试 **`一键逆向Mod的ini`** (基础模式)。
    *   如果是古老的 Buffer 切换 Mod 👉 尝试 **`一键逆向基于Buffer的分支Mod的ini`**。

**❓ 还是搞不定？**

如果你遇到了无法理解的 Mod 格式：
1.  🔄 把三个选项都试一遍。
2.  🛠️ 结合 **`手动逆向`** 功能进行尝试。
3.  🆘 如果还是不行，欢迎联系我寻求技术支持！记得把 Mod 文件发给我，方便我进行测试哦。📧

Happy Modding! ✨