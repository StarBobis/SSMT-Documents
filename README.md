# 📚 SSMT Documents

[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-646cff?logo=vite&logoColor=white)](https://vitepress.dev/)
[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/StarBobis/SSMT-Documents/pulls)

> **SSMT (Super Simple Migoto Tools)** 的官方文档仓库。
> 致力于为 3Dmigoto Mod 制作、逆向工程及插件开发提供最详尽的技术指南。

🔗 **在线阅读文档**: [https://starbobis.github.io/SSMT-Documents/](https://starbobis.github.io/SSMT-Documents/)

---

## 📖 简介 (Introduction)

本项目是 SSMT 工具箱的配套文档，基于 **VitePress** 构建。内容涵盖了从基础安装、环境配置到高级的 Mod 逆向、加密保护及插件开发等全方位教程。我们旨在帮助开发者和 Mod 作者更好地理解和使用 SSMT 系列工具。

## 🛠️ 技术栈 (Tech Stack)

- **Core**: [VitePress](https://vitepress.dev/) (Vue.js 驱动的静态站点生成器)
- **Language**: Markdown, TypeScript
- **Deployment**: GitHub Pages

## 📂 目录结构 (Structure)

```bash
SSMT-Documents/
├── docs/
│   ├── .vitepress/        # VitePress 配置、主题与自定义组件
│   ├── Tutorials/         # 核心教程文档库
│   │   ├── Games/         # 针对不同游戏的特定 Mod 教程 (GI, HSR, ZZZ, etc.)
│   │   ├── Plugins/       # SSMT 插件使用指南 (Reverse, Protect, KeyGen)
│   │   ├── SSMT/          # SSMT 基础功能与 3Dmigoto 知识
│   │   └── Tools/         # 第三方工具与辅助脚本
│   ├── public/            # 静态资源 (图片、图标等)
│   └── index.md           # 文档首页入口
├── package.json           # 项目依赖配置
└── README.md              # 项目说明
```

## 🚀 快速开始 (Getting Started)

如果你想在本地运行或编辑这份文档，请遵循以下步骤：

### 1. 环境准备

确保你的本地环境已安装 [Node.js](https://nodejs.org/) (推荐 v18+)。

### 2. 克隆仓库

```bash
git clone https://github.com/StarBobis/SSMT-Documents.git
cd SSMT-Documents
```

### 3. 安装依赖

```bash
npm install
# 或者使用 pnpm / yarn
pnpm install
```

### 4. 本地开发

启动本地开发服务器，实时预览修改：

```bash
npm run docs:dev
```

终端将输出访问地址（通常为 `http://localhost:5173`），在浏览器中打开即可。

### 5. 构建打包

生成静态文件用于部署：

```bash
npm run docs:build
```

构建产物将位于 `docs/.vitepress/dist` 目录。

## 🤝 贡献指南 (Contributing)

欢迎社区成员提交 PR 来完善文档！

1.  **Fork** 本仓库。
2.  创建一个新的分支 (`git checkout -b feature/AmazingFeature`)。
3.  提交你的修改 (`git commit -m 'Add some AmazingFeature'`)。
4.  推送到分支 (`git push origin feature/AmazingFeature`)。
5.  开启一个 **Pull Request**。

> 💡 **提示**：编写文档时请遵循现有的 Markdown 格式规范，合理使用 Emoji 和引用块以提升阅读体验。

## 📄 许可证 (License)

本项目采用 [GPL-3.0](LICENSE) 许可证开源。
