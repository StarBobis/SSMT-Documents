import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/SSMT-Documents/",
  title: "SSMT-Documents",
  description: "SSMT's Documtns",
  
  themeConfig: {
    // 提供全局搜索框
    search: { provider: 'local' },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'SSMT Blender插件文档', link: '/Tutorials/SSMT-Blender-Plugins/ToggleArchitecture/ToggleArchitecture' },
      { text: '3Dmigoto', link: '/Tutorials/3Dmigoto/3Dmigoto介绍/3Dmigoto介绍' },
      { 
        text: '各游戏常见问题',
        items: [
          // { text: 'GI', link: '/Tutorials/Games/GI/Mod导致报错弹窗问题/Mod导致报错弹窗问题' },
          { text: 'HI3', link: '/Tutorials/Games/HI3/崩坏三角色轮廓线修复/崩坏三角色轮廓线修复' },
          { text: 'HSR', link: '/Tutorials/Games/HSR/UV2是干什么的/UV2是干什么的' },
          { text: 'ZZZ', link: '/Tutorials/Games/ZZZ/Mod法线贴图错误问题/Mod法线贴图错误问题' },
          { text: 'WWMI', link: '/Tutorials/Games/WWMI/如何正确配置进程路径/如何正确配置进程路径' },
          { text: 'GF2', link: '/Tutorials/Games/GF2/GF2人物模型删减与偏移教程/GF2人物模型删减与偏移教程' },
          { text: 'YYSLS', link: '/Tutorials/Games/YYSLS/YYSLS无法注入问题/YYSLS无法注入问题' },
          { text: 'LiarsBar', link: '/Tutorials/Games/LiarsBar/手枪模型只有一个能完整显示/手枪模型只有一个能完整显示' },
          { text: 'IdentityV', link: '/Tutorials/Games/IdentityV/Mod制作说明/Mod制作说明' },

        ] 
      },
      { 
        text: 'SSMT扩展插件', 
         items: [
          { text: 'SSMT-Reverse插件', link: '/Tutorials/Plugins/SSMT-Reverse/(1)SSMT-Reverse插件介绍/(1)SSMT-Reverse插件介绍' },
          { text: 'SSMT-Protect插件', link: '/Tutorials/Plugins/SSMT-Protect/(1)SSMT-Protect插件介绍/(1)SSMT-Protect插件介绍' },

          
        ]
      },
    ],

    sidebar: {
    '/Tutorials/SSMT-Blender-Plugins/':[
      {
        text: 'SSMT Blender插件文档',
        items: [
          { text: '(1)分支集合架构', link: '/Tutorials/SSMT-Blender-Plugins/ToggleArchitecture/ToggleArchitecture' },
          { text: '★平滑法线存TEXCOORD1.xy', link: '/Tutorials/SSMT-Blender-Plugins/★平滑法线存TEXCOORD1.xy/★平滑法线存TEXCOORD1.xy' },
          { text: '★投影TEXCOORD2.xy(近似)', link: '/Tutorials/SSMT-Blender-Plugins/★投影TEXCOORD2.xy(近似)/★投影TEXCOORD2.xy(近似)' },
          
        ]
      },
      {
        text: 'Blender',
        items: [
          { text: '模型细分后权重出问题', link: '/Tutorials/SSMT-Blender-Plugins/模型细分后权重出问题/模型细分后权重出问题' },
          { text: '骨骼约束如何删除', link: '/Tutorials/SSMT-Blender-Plugins/骨骼约束如何删除/骨骼约束如何删除' },
        ]
      }
    ],

      '/Tutorials/Games/':[
        // {
        //   text: 'GI',
        //   items: [
        //     { text: 'Mod变成一坨', link: '/Tutorials/Games/GI/Mod变成一坨/Mod变成一坨' },
        //     { text: 'COLOR不同导致Mod无法显示', link: '/Tutorials/Games/GI/COLOR不同导致Mod无法显示/COLOR不同导致Mod无法显示' },
        //     { text: '原神角色轮廓线修复', link: '/Tutorials/Games/GI/原神角色轮廓线修复/原神角色轮廓线修复' },
        //     { text: '原神脸部隐藏问题', link: '/Tutorials/Games/GI/原神脸部隐藏问题/原神脸部隐藏问题' },
          
        //   ]
        // },
        {
          text: 'HI3',
          items: [
            { text: '崩坏三角色轮廓线修复', link: '/Tutorials/Games/HI3/崩坏三角色轮廓线修复/崩坏三角色轮廓线修复' },
            { text: '第二套UVMap的用处', link: '/Tutorials/Games/HI3/第二套UVMap的用处/第二套UVMap的用处' },
          ]
        },
        {
          text: 'HSR',
          items: [
            { text: 'UV2是干什么的', link: '/Tutorials/Games/HSR/UV2是干什么的/UV2是干什么的' },
            { text: '动态Mod导致角色描边抽搐', link: '/Tutorials/Games/HSR/动态Mod导致角色描边抽搐/动态Mod导致角色描边抽搐' },
            { text: '贴图槽位乱窜问题', link: '/Tutorials/Games/HSR/贴图槽位乱窜问题/贴图槽位乱窜问题' },
            { text: '崩铁角色轮廓线修复', link: '/Tutorials/Games/HSR/崩铁角色轮廓线修复/崩铁角色轮廓线修复' },
            { text: '崩铁角色黄色描边修复', link: '/Tutorials/Games/HSR/崩铁角色黄色描边修复/崩铁角色黄色描边修复' },
            { text: '部分动作导致Mod炸裂', link: '/Tutorials/Games/HSR/部分动作导致Mod炸裂/部分动作导致Mod炸裂' },

          ]
        },
        {
          text: 'ZZZ',
          items: [
            { text: 'Mod法线贴图错误问题', link: '/Tutorials/Games/ZZZ/Mod法线贴图错误问题/Mod法线贴图错误问题' },
            { text: '上下身体分开的问题', link: '/Tutorials/Games/ZZZ/上下身体分开的问题/上下身体分开的问题' },
            { text: '关闭动态高精度', link: '/Tutorials/Games/ZZZ/关闭动态高精度/关闭动态高精度' },
            { text: '完美阴影和轮廓线', link: '/Tutorials/Games/ZZZ/完美阴影和轮廓线/完美阴影和轮廓线' },
            { text: '虚假头发问题', link: '/Tutorials/Games/ZZZ/虚假头发问题/虚假头发问题' },
            { text: '爱丽丝的剑替换后消失', link: '/Tutorials/Games/ZZZ/爱丽丝的剑替换后消失/爱丽丝的剑替换后消失' },
          ]
        },
        {
          text: 'WWMI',
          items: [
            { text: '如何正确配置进程路径', link: '/Tutorials/Games/WWMI/如何正确配置进程路径/如何正确配置进程路径' },
          ]
        },
        {
          text: 'GF2',
          items: [
            { text: 'GF2人物模型删减与偏移教程', link: '/Tutorials/Games/GF2/GF2人物模型删减与偏移教程/GF2人物模型删减与偏移教程' },
          ]
        },
        {
          text: 'YYSLS',
          items: [
            { text: 'YYSLS无法注入问题', link: '/Tutorials/Games/YYSLS/YYSLS无法注入问题/YYSLS无法注入问题' },
          ]
        },

        {
          text: 'LiarsBar',
          items: [
            { text: '手枪模型只有一个能完整显示', link: '/Tutorials/Games/LiarsBar/手枪模型只有一个能完整显示/手枪模型只有一个能完整显示' },
          ]
        },

        {
          text: 'IdentityV',
          items: [
            { text: 'Mod制作说明', link: '/Tutorials/Games/IdentityV/Mod制作说明/Mod制作说明' },
          ]
        },
      ],
      '/Tutorials/Tools/':[{
        text: '常见问题',
        items: [
          { text: 'Handy Weight Edit', link: '/Tutorials/Tools/Handy Weight Edit/Handy Weight Edit' },
          { text: 'Fluid Painter', link: '/Tutorials/Tools/Fluid Painter NSFW/Fluid Painter' },
          { text: 'F2 Addon', link: '/Tutorials/Tools/F2 Addon/F2 Addon' },
          
        ]
      }],
      '/Tutorials/3Dmigoto/':
      [
        {
          text: '3Dmigoto',
          items: 
          [
            { text: '3Dmigoto介绍', link: '/Tutorials/3Dmigoto/3Dmigoto介绍/3Dmigoto介绍' },
            { text: '如何手动安装Mod', link: '/Tutorials/3Dmigoto/如何手动安装Mod/如何手动安装Mod' },
            { text: '没有小键盘如何使用Hunting界面', link: '/Tutorials/3Dmigoto/没有小键盘如何使用Hunting界面/没有小键盘如何使用Hunting界面' },
            { text: '通过贴图找IB的Hash值', link: '/Tutorials/3Dmigoto/通过贴图找IB的Hash值/通过贴图找IB的Hash值' },
            { text: '常用链接', link: '/Tutorials/3Dmigoto/常用链接/常用链接' },
            { text: '跨IB渲染教程', link: '/Tutorials/3Dmigoto/跨IB渲染教程/跨IB渲染教程' },
            { text: '3Dmigoto在手游上使用', link: '/Tutorials/3Dmigoto/3Dmigoto在手游上使用/3Dmigoto在手游上使用' },

            { text: 'SmoothMotion不兼容问题', link: '/Tutorials/3Dmigoto/SmoothMotion不兼容问题/SmoothMotion不兼容问题' },
            { text: '新版本驱动导致无法注入问题', link: '/Tutorials/3Dmigoto/新版本驱动导致无法注入问题/新版本驱动导致无法注入问题' },
            
            
          ]
        },
        {
          text: '使用技巧',
          items: 
          [
            { text: '通过贴图找IB的Hash值', link: '/Tutorials/3Dmigoto/通过贴图找IB的Hash值/通过贴图找IB的Hash值' },
          ]
        }
      ],

      '/Tutorials/Plugins/':
      [
        {
          text: '激活插件',
          items: 
          [
            { text: '密钥生成器', link: '/Tutorials/Plugins/密钥生成器/密钥生成器' },
          ]
        },
        {
          text: 'SSMT-Reverse插件',
          items: 
          [
            { text: '(1)SSMT-Reverse插件介绍', link: '/Tutorials/Plugins/SSMT-Reverse/(1)SSMT-Reverse插件介绍/(1)SSMT-Reverse插件介绍' },
            { text: '(2)安装插件', link: '/Tutorials/Plugins/SSMT-Reverse/(2)安装插件/(2)安装插件' },
            { text: '(5)批量转换贴图格式', link: '/Tutorials/Plugins/SSMT-Reverse/(5)批量转换贴图格式/(5)批量转换贴图格式' },
            { text: '(6)手动逆向功能', link: '/Tutorials/Plugins/SSMT-Reverse/(6)手动逆向功能/(6)手动逆向功能' },
            { text: '(7)更新日志', link: '/Tutorials/Plugins/SSMT-Reverse/(7)更新日志/(7)更新日志' },
            { text: '常见问题', link: '/Tutorials/Plugins/SSMT-Reverse/常见问题/常见问题' },
            { text: '☆远距离和近距离放一起的NPC Mod无法一键逆向', link: '/Tutorials/Plugins/SSMT-Reverse/☆远距离和近距离放一起的NPC Mod无法一键逆向/☆远距离和近距离放一起的NPC Mod无法一键逆向' },
            { text: 'ResourceVBList.size()为4的Mod', link: '/Tutorials/Plugins/SSMT-Reverse/ResourceVBList.size()为4的Mod/ResourceVBList.size()为4的Mod' },
            { text: '☆跨IB渲染的Mod逆向', link: '/Tutorials/Plugins/SSMT-Reverse/☆跨IB渲染的Mod逆向/☆跨IB渲染的Mod逆向' },
            { text: '☆原神面部Mod逆向方法', link: '/Tutorials/Plugins/SSMT-Reverse/☆原神面部Mod逆向方法/☆原神面部Mod逆向方法' },
            { text: 'IndexBuffer和CategoryBuffer膨胀混淆技术', link: '/Tutorials/Plugins/SSMT-Reverse/IndexBuffer和CategoryBuffer膨胀混淆技术/IndexBuffer和CategoryBuffer膨胀混淆技术' },
            { text: '☆为什么鸣潮Mod逆向出来有两个数据类型', link: '/Tutorials/Plugins/SSMT-Reverse/☆为什么鸣潮Mod逆向出来有两个数据类型/☆为什么鸣潮Mod逆向出来有两个数据类型' },
          ]
        },
        {
          text: 'SSMT-Protect插件',
          items: 
          [
            { text: '(1)SSMT-Protect插件介绍', link: '/Tutorials/Plugins/SSMT-Protect/(1)SSMT-Protect插件介绍/(1)SSMT-Protect插件介绍' },
            { text: '(2)安装方法', link: '/Tutorials/Plugins/SSMT-Protect/(2)安装方法/(2)安装方法' },
            { text: '(3)加密功能说明', link: '/Tutorials/Plugins/SSMT-Protect/(3)加密功能说明/(3)加密功能说明' },
            { text: '(4)Mod锁机器码功能说明', link: '/Tutorials/Plugins/SSMT-Protect/(4)Mod锁机器码功能说明/(4)Mod锁机器码功能说明' },

          ]
        }
       
      ],
    },

    footer: {
        copyright: 'By <a href="https://github.com/StarBobis">NicoMico</a>, <a href="https://github.com/Xeon-acid">Perxenic Acid</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarBobis/SSMT' },
      { icon: 'discord', link: 'https://discord.gg/8fKGpFU9KZ' }
    ]
  }
})
