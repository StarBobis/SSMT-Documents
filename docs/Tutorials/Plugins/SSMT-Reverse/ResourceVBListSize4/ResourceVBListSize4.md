# ResourceVBList.size()为4的Mod
有些Mod额外加入了大招动画修复，或者某些特殊状态下的动画修复，这时候就会多一个Blend类型的Resource，技术上称之为remapped blend：

![alt text](image.png)

直接逆向的话，日志大概是酱紫的：

![alt text](image-1.png)

这时候我们手动删掉这个remapped技术的Resource，或者注释掉：

![alt text](image-2.png)

然后就成功逆向出来了：

![alt text](image-3.png)

