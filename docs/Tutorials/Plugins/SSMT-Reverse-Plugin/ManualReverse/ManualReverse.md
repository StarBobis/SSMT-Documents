# 🖐️ 手动逆向功能

手动逆向功能是最强大的 Mod 逆向功能，没有之一。

![alt text](image.png)

使用手动逆向功能，可以在全自动逆向被特殊 `ini` 写法导致失效时，仍然能够进行 Mod 逆向，并且其上限只取决于用户的操作，不会受到一键逆向的上限影响。

## 🛠️ 操作方法

手动逆向要填入 `Index Buffer File List` 和 `Category buffer File List`，全程拖拽，操作简单方便。
且支持在没有对应数据类型的情况下，自己手动添加数据类型。

> 📺 **视频教程**：
> 由于使用过程是简单拖拽的，这里我录制了完整的视频教程，相比于文档演示和学习起来更方便：
>
> [【手动逆向教程】](https://www.bilibili.com/video/BV1rGR6YbEkf/?spm_id_from=333.1387.upload.video_card.click)

## ⚠️ 缺点与解决方案

手动逆向的缺点就是没有办法自动拆分模型，如果 Mod 是由多个 `drawindexed` 构成的则逆向出的模型仍然是一个整体，需要手动进行拆分。

此时我们可以使用 **Herta 插件** 中的 `Split By DrawIndexed` 功能进行拆分。

> 📺 **拆分教程**：
> 具体步骤可查看此教程：
>
> [【模型拆分教程】](https://www.bilibili.com/video/BV1akjLzoEoo/?spm_id_from=333.1387.upload.video_card.click)

## 🧩 数据类型缺失

如果手动逆向功能没有找到对应的数据类型，则会弹出如下提示：

![alt text](image-1.png)

此时可以把 Mod 文件发我联系我添加数据类型，也可以在 **DBMT** 的数据类型管理页面中自行添加数据类型，并把添加好的数据类型 `json` 文件放到 Sword 对应的数据类型配置文件夹下：

`Configs\GameTypeConfigs\对应游戏\`

![alt text](image-2.png)

例如 ZZZ：

![alt text](image-3.png)

> 📺 **添加数据类型教程**：
> DBMT 的数据类型添加可以看这期教程：
>
> [【数据类型添加教程】](https://www.bilibili.com/video/BV1YoZ8YbEpA/?spm_id_from=333.1387.upload.video_card.click)

## 📝 总结

总之，灵活应用手动逆向功能可以解决你遇到的很多 Mod 无法一键逆向的问题。

比如带有面板可调整的形态键 Mod 或者使用 `Slider Impact` 制作的多切换形态键 Mod 等等。

