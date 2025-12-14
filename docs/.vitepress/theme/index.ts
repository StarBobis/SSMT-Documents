import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import { h } from 'vue'
import './index.css'
import { initMeteorEffect } from './meteors'
import BGMPlayer from './components/BGMPlayer.vue'
import GoogleTranslate from './components/GoogleTranslate.vue'

// 自定义主题
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => [h(BGMPlayer), h(GoogleTranslate)]
    })
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
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
      router.onAfterRouteChange = () => {
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
    opacity: 0; /* 初始隐藏，加载完成后淡入 */
    pointer-events: none;
    will-change: transform; /* 启用硬件加速 */
    transform: translateZ(0); /* 强制 GPU 渲染 */
    transition: opacity 1.5s ease-in-out; /* 平滑淡入效果 */
  `

  document.body.appendChild(video)

  const playVideo = () => {
    video.play().then(() => {
      // 播放成功后淡入
      video.style.opacity = '0.3'
    }).catch(e => {
      console.warn('Autoplay prevented:', e)
      // 如果自动播放失败，添加一次性点击监听器来触发播放
      const playOnClick = () => {
        video.play().then(() => {
          video.style.opacity = '0.3'
        })
        document.removeEventListener('click', playOnClick)
      }
      document.addEventListener('click', playOnClick)
    })
  }

  const loadVideo = (url: string) => {
    console.log('Start loading video:', url)
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        return response.blob()
      })
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob)
        video.src = blobUrl
        
        video.addEventListener('canplay', () => {
          console.log('Video ready to play')
          playVideo()
        }, { once: true })
      })
      .catch(e => {
        console.error('Video load error:', e)
        // 尝试 mp4 作为备选
        if (url.endsWith('.webm')) {
          console.log('Falling back to mp4...')
          loadVideo(`${base}background.mp4`)
        }
      })
  }

  // 开始加载
  loadVideo(`${base}background.webm`)
}