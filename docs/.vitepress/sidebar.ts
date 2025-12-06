export const sidebar = {
  '/Tutorials/SSMT/':[
    {
      text: 'SSMT3',
      items: [
        { text: 'SSMT3 下载与安装', link: '/Tutorials/SSMT/SSMT3/DownloadAndInstall/DownloadAndInstall' },
        { text: '主页配置', link: '/Tutorials/SSMT/SSMT3/HomePageConfig/HomePageConfig' },
        { text: '注入3Dmigoto到游戏', link: '/Tutorials/SSMT/SSMT3/Inject3DmigotoIntoGame/Inject3DmigotoIntoGame' },
      ]
    },
    {
      text: 'TheHerta3',
      items: [
        { text: 'TheHerta3插件安装教程', link: '/Tutorials/SSMT/TheHerta3/TheHerta3Installation/TheHerta3Installation' },
        { text: '(1)分支集合架构', link: '/Tutorials/SSMT/TheHerta3/ToggleArchitecture/ToggleArchitecture' },
        { text: '★平滑法线存TEXCOORD1.xy', link: '/Tutorials/SSMT/TheHerta3/SmoothNormalToTEXCOORD1/SmoothNormalToTEXCOORD1' },
        { text: '★投影TEXCOORD2.xy(近似)', link: '/Tutorials/SSMT/TheHerta3/ProjectTEXCOORD2/ProjectTEXCOORD2' },
        { text: '模型细分后权重出问题', link: '/Tutorials/SSMT/TheHerta3/SubdivisionWeightIssue/SubdivisionWeightIssue' },
        { text: '骨骼约束如何删除', link: '/Tutorials/SSMT/TheHerta3/RemoveBoneConstraints/RemoveBoneConstraints' },
      ]
    },
    {
      text: 'Blender',
      items: [
        { text: 'Blender 教程', link: '/Tutorials/SSMT/Blender/index' },
      ]
    },
    {
      text: '3Dmigoto',
      items: 
      [
        { text: '3Dmigoto介绍', link: '/Tutorials/SSMT/3Dmigoto/Introduction/Introduction' },
        { text: '如何手动安装Mod', link: '/Tutorials/SSMT/3Dmigoto/ManualModInstallation/ManualModInstallation' },
        { text: '没有小键盘如何使用Hunting界面', link: '/Tutorials/SSMT/3Dmigoto/NoNumpadHunting/NoNumpadHunting' },
        { text: '通过贴图找IB的Hash值', link: '/Tutorials/SSMT/3Dmigoto/FindIBHashByTexture/FindIBHashByTexture' },
        { text: '常用链接', link: '/Tutorials/SSMT/3Dmigoto/UsefulLinks/UsefulLinks' },
        { text: '跨IB渲染教程', link: '/Tutorials/SSMT/3Dmigoto/CrossIBRendering/CrossIBRendering' },
        { text: '3Dmigoto在手游上使用', link: '/Tutorials/SSMT/3Dmigoto/MobileUsage/MobileUsage' },

        { text: 'SmoothMotion不兼容问题', link: '/Tutorials/SSMT/3Dmigoto/SmoothMotionIncompatibility/SmoothMotionIncompatibility' },
        { text: '新版本驱动导致无法注入问题', link: '/Tutorials/SSMT/3Dmigoto/DriverInjectionIssue/DriverInjectionIssue' },
      ]
    },
    {
      text: '3Dmigoto 使用技巧',
      items: 
      [
        { text: '通过贴图找IB的Hash值', link: '/Tutorials/SSMT/3Dmigoto/FindIBHashByTexture/FindIBHashByTexture' },
      ]
    }
  ],

    '/Tutorials/Games/':[
      // {
      //   text: 'GI',
      //   items: [
      //     { text: 'Mod变成一坨', link: '/Tutorials/Games/GI/ModDistortion/ModDistortion' },
      //     { text: 'COLOR不同导致Mod无法显示', link: '/Tutorials/Games/GI/ColorMismatch/ColorMismatch' },
      //     { text: '原神角色轮廓线修复', link: '/Tutorials/Games/GI/OutlineFix/OutlineFix' },
      //     { text: '原神脸部隐藏问题', link: '/Tutorials/Games/GI/FaceHidingIssue/FaceHidingIssue' },
        
      //   ]
      // },
      {
        text: 'HI3',
        items: [
          { text: '崩坏三角色轮廓线修复', link: '/Tutorials/Games/HI3/OutlineFix/OutlineFix' },
          { text: '第二套UVMap的用处', link: '/Tutorials/Games/HI3/SecondUVMapUsage/SecondUVMapUsage' },
        ]
      },
      {
        text: 'HSR',
        items: [
          { text: 'UV2是干什么的', link: '/Tutorials/Games/HSR/WhatIsUV2/WhatIsUV2' },
          { text: '动态Mod导致角色描边抽搐', link: '/Tutorials/Games/HSR/DynamicModOutlineGlitch/DynamicModOutlineGlitch' },
          { text: '贴图槽位乱窜问题', link: '/Tutorials/Games/HSR/TextureSlotIssue/TextureSlotIssue' },
          { text: '崩铁角色轮廓线修复', link: '/Tutorials/Games/HSR/OutlineFix/OutlineFix' },
          { text: '崩铁角色黄色描边修复', link: '/Tutorials/Games/HSR/YellowOutlineFix/YellowOutlineFix' },
          { text: '部分动作导致Mod炸裂', link: '/Tutorials/Games/HSR/ActionModCrash/ActionModCrash' },

        ]
      },
      {
        text: 'ZZZ',
        items: [
          { text: 'Mod法线贴图错误问题', link: '/Tutorials/Games/ZZZ/NormalMapError/NormalMapError' },
          { text: '上下身体分开的问题', link: '/Tutorials/Games/ZZZ/BodySeparationIssue/BodySeparationIssue' },
          { text: '关闭动态高精度', link: '/Tutorials/Games/ZZZ/DisableDynamicHighPrecision/DisableDynamicHighPrecision' },
          { text: '完美阴影和轮廓线', link: '/Tutorials/Games/ZZZ/PerfectShadowAndOutline/PerfectShadowAndOutline' },
          { text: '虚假头发问题', link: '/Tutorials/Games/ZZZ/FakeHairIssue/FakeHairIssue' },
          { text: '爱丽丝的剑替换后消失', link: '/Tutorials/Games/ZZZ/AliceSwordDisappear/AliceSwordDisappear' },
        ]
      },
      {
        text: 'WWMI',
        items: [
          { text: '如何正确配置进程路径', link: '/Tutorials/Games/WWMI/ProcessPathConfig/ProcessPathConfig' },
        ]
      },
      {
        text: 'GF2',
        items: [
          { text: 'GF2人物模型删减与偏移教程', link: '/Tutorials/Games/GF2/ModelReductionAndOffset/ModelReductionAndOffset' },
        ]
      },
      {
        text: 'YYSLS',
        items: [
          { text: 'YYSLS无法注入问题', link: '/Tutorials/Games/YYSLS/InjectionIssue/InjectionIssue' },
        ]
      },

      {
        text: 'LiarsBar',
        items: [
          { text: '手枪模型只有一个能完整显示', link: '/Tutorials/Games/LiarsBar/PistolModelIssue/PistolModelIssue' },
        ]
      },

      {
        text: 'IdentityV',
        items: [
          { text: 'Mod制作说明', link: '/Tutorials/Games/IdentityV/ModCreationGuide/ModCreationGuide' },
        ]
      },
    ],
    '/Tutorials/Tools/':[{
      text: '常见问题',
      items: [
        { text: 'Handy Weight Edit', link: '/Tutorials/Tools/HandyWeightEdit/HandyWeightEdit' },
        { text: 'Fluid Painter', link: '/Tutorials/Tools/FluidPainter/FluidPainter' },
        { text: 'F2 Addon', link: '/Tutorials/Tools/F2Addon/F2Addon' },
        
      ]
    }],


    '/Tutorials/Plugins/':
    [
      {
        text: '激活插件',
        items: 
        [
          { text: '密钥生成器', link: '/Tutorials/Plugins/KeyGenerator/KeyGenerator' },
        ]
      },
      {
        text: 'SSMT-Reverse插件',
        items: 
        [
          { text: '(1)SSMT-Reverse插件介绍', link: '/Tutorials/Plugins/SSMT-Reverse/Introduction/Introduction' },
          { text: '(2)安装插件', link: '/Tutorials/Plugins/SSMT-Reverse/Installation/Installation' },
          { text: '(3)批量转换贴图格式', link: '/Tutorials/Plugins/SSMT-Reverse/BatchTextureConversion/BatchTextureConversion' },
          { text: '(4)手动逆向功能', link: '/Tutorials/Plugins/SSMT-Reverse/ManualReverse/ManualReverse' },
          { text: '(5)更新日志', link: '/Tutorials/Plugins/SSMT-Reverse/Changelog/Changelog' },
          { text: '(6)常见问题', link: '/Tutorials/Plugins/SSMT-Reverse/FAQ/FAQ' },
          { text: '☆远距离和近距离放一起的NPC Mod无法一键逆向', link: '/Tutorials/Plugins/SSMT-Reverse/NPCModReverseIssue/NPCModReverseIssue' },
          { text: '☆ResourceVBList.size()为4的Mod', link: '/Tutorials/Plugins/SSMT-Reverse/ResourceVBListSize4/ResourceVBListSize4' },
          { text: '☆跨IB渲染的Mod逆向', link: '/Tutorials/Plugins/SSMT-Reverse/CrossIBReverse/CrossIBReverse' },
          { text: '☆原神面部Mod逆向方法', link: '/Tutorials/Plugins/SSMT-Reverse/GenshinFaceReverse/GenshinFaceReverse' },
          { text: '☆IndexBuffer和CategoryBuffer膨胀混淆技术', link: '/Tutorials/Plugins/SSMT-Reverse/BufferInflationObfuscation/BufferInflationObfuscation' },
        ]
      },
      {
        text: 'SSMT-Protect插件',
        items: 
        [
          { text: '(1)SSMT-Protect插件介绍', link: '/Tutorials/Plugins/SSMT-Protect/Introduction/Introduction' },
          { text: '(2)安装方法', link: '/Tutorials/Plugins/SSMT-Protect/Installation/Installation' },
          { text: '(3)加密功能说明', link: '/Tutorials/Plugins/SSMT-Protect/EncryptionFeatures/EncryptionFeatures' },
          { text: '(4)Mod锁机器码功能说明', link: '/Tutorials/Plugins/SSMT-Protect/HardwareLock/HardwareLock' },

        ]
      }
     
    ],
};