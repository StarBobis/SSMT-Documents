import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import { h } from 'vue'
// import './index.css' // CSS is now managed by EffectSwitch
import BGMPlayer from './components/BGMPlayer.vue'
import GoogleTranslate from './components/GoogleTranslate.vue'
import EffectSwitch from './components/EffectSwitch.vue'

// 自定义主题
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => [h(BGMPlayer), h(EffectSwitch), h(GoogleTranslate)]
    })
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // 在客户端挂载后添加视频背景
    if (typeof window !== 'undefined') {
      // 视觉特效现在由 EffectSwitch 组件统一管理
      // 不再需要在这里手动初始化
    }
  }
}