<script setup>
import { ref, onMounted, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import { initMeteorEffect, stopMeteorEffect } from '../meteors'
import { isEffectsEnabled } from '../themeState'
// @ts-ignore
import customStyles from '../index.css?inline'

const { site } = useData()
const isLoading = ref(false)
const videoElement = ref(null)

const toggleEffects = () => {
  if (isEffectsEnabled.value) {
    // Turn off
    isEffectsEnabled.value = false
    disableEffects()
    localStorage.setItem('visual-effects-enabled', 'false')
  } else {
    // Turn on
    isEffectsEnabled.value = true
    isLoading.value = true
    enableEffects()
    localStorage.setItem('visual-effects-enabled', 'true')
  }
}

const disableEffects = () => {
  // Remove video
  if (videoElement.value) {
    // Properly cleanup video resources
    videoElement.value.pause()
    const src = videoElement.value.src
    videoElement.value.src = ''
    videoElement.value.load()
    
    if (src && src.startsWith('blob:')) {
      URL.revokeObjectURL(src)
    }
    
    videoElement.value.remove()
    videoElement.value = null
  } else {
    const el = document.querySelector('.bg-video')
    if (el) {
      // @ts-ignore
      el.pause()
      // @ts-ignore
      const src = el.src
      // @ts-ignore
      el.src = ''
      // @ts-ignore
      el.load()
      if (src && src.startsWith('blob:')) {
        URL.revokeObjectURL(src)
      }
      el.remove()
    }
  }
  
  // Stop meteors
  stopMeteorEffect()

  // Remove custom CSS
  const styleTag = document.getElementById('custom-theme-styles')
  if (styleTag) {
    styleTag.remove()
  }
}

const enableEffects = () => {
  // Inject custom CSS
  if (!document.getElementById('custom-theme-styles')) {
    const style = document.createElement('style')
    style.id = 'custom-theme-styles'
    style.textContent = customStyles
    document.head.appendChild(style)
  }

  // Start meteors immediately
  initMeteorEffect()
  
  // Load video
  loadVideo()
}

const loadVideo = () => {
  const videoUrl = withBase('/background.webm')
  
  console.log('Start loading video:', videoUrl)
  
  fetch(videoUrl)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return response.blob()
    })
    .then(blob => {
      if (!isEffectsEnabled.value) return // User might have cancelled

      const blobUrl = URL.createObjectURL(blob)
      createVideoElement(blobUrl)
      isLoading.value = false
    })
    .catch(e => {
      console.error('Video load error:', e)
      // Fallback to mp4
      if (videoUrl.endsWith('.webm')) {
         const mp4Url = withBase('/background.mp4')
         fetch(mp4Url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
                return res.blob()
            })
            .then(blob => {
                if (!isEffectsEnabled.value) return
                createVideoElement(URL.createObjectURL(blob))
                isLoading.value = false
            })
            .catch(err => {
                console.error("MP4 fallback failed", err)
                isLoading.value = false
                // isEffectsEnabled.value = false // Reset state on failure
            })
      } else {
          isLoading.value = false
          // isEffectsEnabled.value = false
      }
    })
}

const createVideoElement = (src) => {
  // Avoid duplicates
  if (document.querySelector('.bg-video')) return

  const video = document.createElement('video')
  video.className = 'bg-video'
  video.src = src
  video.autoplay = true
  video.muted = true
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
    opacity: 0;
    pointer-events: none;
    will-change: transform;
    transform: translateZ(0);
    transition: opacity 1.5s ease-in-out;
  `

  document.body.appendChild(video)
  videoElement.value = video

  video.addEventListener('canplay', () => {
    video.play().then(() => {
      video.style.opacity = '0.3'
    }).catch(() => {
        // Autoplay failed
    })
  }, { once: true })
}

onMounted(() => {
  // Check localStorage
  // Migrate old key if exists
  if (localStorage.getItem('video-bg-enabled') === 'true') {
      localStorage.setItem('visual-effects-enabled', 'true')
      localStorage.removeItem('video-bg-enabled')
  } else if (localStorage.getItem('video-bg-enabled') === 'false') {
      localStorage.setItem('visual-effects-enabled', 'false')
      localStorage.removeItem('video-bg-enabled')
  }

  const savedState = localStorage.getItem('visual-effects-enabled')
  // Default to enabled if not explicitly disabled (null or 'true')
  if (savedState === 'true' || savedState === null) {
    isEffectsEnabled.value = true
    isLoading.value = true
    enableEffects()
  }
})
</script>

<template>
  <div class="video-bg-control">
    <button 
      class="video-toggle" 
      @click="toggleEffects" 
      :title="isEffectsEnabled ? '关闭视觉特效 (节省性能)' : '开启视觉特效 (消耗性能)'"
      :disabled="isLoading"
    >
      <div class="icon-container">
        <span v-if="isLoading">⏳</span>
        <span v-else-if="isEffectsEnabled">✨</span>
        <span v-else class="muted">✨</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
.video-bg-control {
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid var(--vp-c-divider);
  height: 24px;
}

.video-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-1);
  transition: opacity 0.2s;
}

.video-toggle:hover {
  opacity: 0.7;
}

.video-toggle:disabled {
  cursor: wait;
  opacity: 0.5;
}

.icon-container {
  font-size: 18px;
  line-height: 1;
}

.muted {
  opacity: 0.5;
  filter: grayscale(100%);
}

@media (max-width: 768px) {
  .video-bg-control {
    display: none;
  }
}
</style>
