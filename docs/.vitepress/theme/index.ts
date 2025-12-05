import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './index.css'
import { initMeteorEffect } from './meteors'
import BGMPlayer from './components/BGMPlayer.vue'

// 自定义主题
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(BGMPlayer)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 在客户端挂载后添加视频背景
    if (typeof window !== 'undefined') {
      const base = siteData.value.base || '/'
      
      const initVideo = () => {
        addVideoBackground(base)
        initMeteorEffect()
      }

      // 监听页面加载
      window.addEventListener('load', initVideo)

      // 路由切换
      router.onAfterRouteUpdate = () => {
        initVideo()
      }
      
      // 立即尝试
      initVideo()
    }
  }
}

function addVideoBackground(base: string) {
  // 避免重复添加
  if (document.querySelector('.bg-video')) return

  console.log('Initializing video background with base:', base)

  const video = document.createElement('video')
  video.className = 'bg-video'
  
  // 确保路径正确：base 已经包含前后斜杠 (例如 /SSMT-Documents/)
  // 如果 base 是 '/'，则路径为 '/background.webm'
  // 如果 base 是 '/docs/'，则路径为 '/docs/background.webm'
  const videoPath = `${base}background.webm`
  video.src = videoPath
  
  video.autoplay = true
  video.muted = true // 必须静音才能自动播放
  video.loop = true
  video.playsInline = true
  
  video.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.3;
    /* filter: blur(1px); 移除模糊以提高性能 */
    pointer-events: none;
    will-change: transform; /* 启用硬件加速 */
    transform: translateZ(0); /* 强制 GPU 渲染 */
  `

  // 错误处理和自动播放尝试
  video.addEventListener('error', (e) => {
    console.error('Video load error. Path:', videoPath, e)
    // 尝试 mp4 作为备选
    if (video.src.endsWith('.webm')) {
      console.log('Falling back to mp4...')
      video.src = `${base}background.mp4`
    }
  })

  video.addEventListener('canplay', () => {
    console.log('Video ready to play')
    video.play().catch(e => {
      console.warn('Autoplay prevented:', e)
      // 如果自动播放失败，添加一次性点击监听器来触发播放
      const playOnClick = () => {
        video.play()
        document.removeEventListener('click', playOnClick)
      }
      document.addEventListener('click', playOnClick)
    })
  })

  document.body.appendChild(video)
}