# 🧩 SSMT 的 Blender 插件安装教程

::: info 💻 系统要求
**推荐配置**:
- <span style="color: #42b883; font-weight: bold;">Blender 4.5 LTS 版本</span> (及以上)

**最低配置**:
- Blender 4.2 LTS 版本
:::

::: warning ⚠️ 版本兼容性警告
**TheHerta3** 的自动贴图流程全部使用 `.dds` 格式的贴图文件。
- 在 **Blender 4.2 或以下版本** 中，`.dds` 贴图无法正常显示（会变成紫色）。
- 虽然插件在 Blender 3.6 LTS 上能工作，但为了最佳体验，**强烈建议** 使用推荐的 <span style="color: #42b883; font-weight: bold;">Blender 4.5 LTS 版本</span>。
:::

## 📥 下载插件

前往 [GitHub 仓库](https://github.com/StarBobis/TheHerta3)，仿照 SSMT 安装教程，下载 Release 中的最新插件版本到任意位置。

![1752128274140](image/SSMT的Blender插件安装教程/1752128274140.png)

下面将分别以 **Blender 4.2.9** (简体中文界面) 和 **3.6.23** 为例进行演示。
> 💡 推荐安装到 **Blender 4.5 LTS** 上，安装过程大同小异。

## 🛠️ Blender 4.2.9 (及以上) 安装步骤

1.  点击顶部菜单栏的 **`编辑`** (Edit) → **`偏好设置`** (Preferences)：

    ![1752128982592](image/SSMT的Blender插件安装教程/1752128982592.png)

2.  弹出窗口后，点击右上角的 **`插件`** (Add-ons) → 点击右上角的 **`v`** 箭头 → 选择 **`从磁盘安装`** (Install from Disk)：

    ![1752129089658](image/SSMT的Blender插件安装教程/1752129089658.png)

3.  在弹出的文件浏览器中，选择下载好的 `TheHertaVxxx.zip` 文件，然后点击 **`从磁盘安装`** 确认：

    ![1752129321935](image/SSMT的Blender插件安装教程/1752129321935.png)

4.  🎉 **安装成功！** 关闭偏好设置窗口，在 3D 视图中按 <kbd>N</kbd> 键打开侧栏，就能看到 **`TheHerta`** 选项卡了：

    ![1752129480325](image/SSMT的Blender插件安装教程/1752129480325.png)

## 🛠️ Blender 3.6.23 (旧版本) 安装步骤

1.  同上，打开 **`偏好设置`**。

2.  选择 **`插件`** 标签页 → 点击顶部的 **`安装`** 按钮：

    ![1752130104078](image/SSMT的Blender插件安装教程/1752130104078.png)

3.  同上，选择并确认安装 `.zip` 文件。

4.  选择 **`社区版`**，查看社区版插件。
    ::: danger ⚠️ 注意
    安装好插件后，3.6 版本 Blender **不会自动启用** 插件！
    **必须在这里手动勾选启用**，然后保存配置。
    :::
   
    > 💡 **小贴士**：如果不小心关闭了窗口找不到插件，点击 `社区版`，然后在搜索框（绿框处）搜索 “SSMT” 即可找到：

    ![1752130509356](image/SSMT的Blender插件安装教程/1752130509356.png)

5.  其余验证工作同上，按 <kbd>N</kbd> 键查看侧栏。

## 🔄 SSMT 插件更新

在侧栏打开 **TheHerta** 工作菜单，点击 **`检查 ssmt_blender_plugin 更新`**，等待片刻：

![1752130778696](image/SSMT的Blender插件安装教程/1752130778696.png)
![1752130805506](image/SSMT的Blender插件安装教程/1752130805506.png)

若有更新，点击 **`Update Now to (x.x.x)`** 即可自动更新：

![1752130843349](image/SSMT的Blender插件安装教程/1752130843349.png)

::: tip 🔄 重启生效
更新完成后，请务必 **重启 Blender** 以完成更新！
:::

![1752130910734](image/SSMT的Blender插件安装教程/1752130910734.png)

