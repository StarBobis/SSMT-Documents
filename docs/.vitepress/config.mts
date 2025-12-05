import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/SSMT-Documents/",
  title: "SSMT-Documents",
  description: "SSMT's Documtns",
  
  themeConfig: {
    // 提供全局搜索框
    search: { provider: 'local' },

    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    footer: {
        copyright: 'By <a href="https://github.com/StarBobis">NicoMico</a>, <a href="https://github.com/Xeon-acid">Perxenic Acid</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarBobis/SSMT' },
      { icon: 'discord', link: 'https://discord.gg/8fKGpFU9KZ' }
    ]
  }
})
