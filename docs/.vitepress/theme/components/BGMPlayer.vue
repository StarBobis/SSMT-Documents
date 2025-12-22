<script setup>
import { ref, onMounted, watch, nextTick, onUnmounted } from 'vue'
import { useData, withBase } from 'vitepress'
import { isEffectsEnabled } from '../themeState'

const { site } = useData()
const isPlaying = ref(false)
const audioRef = ref(null)
const volume = ref(0.52) // 默认小音量
const isLoaded = ref(false) // 新增加载状态
const cachedBlobUrl = ref(null)
let startPlayListener = null

const togglePlay = () => {
  if (!audioRef.value || !isLoaded.value) return // 未加载完成不能播放
  
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    playAudio()
  }
}

const playAudio = () => {
  if (!audioRef.value) return

  const playPromise = audioRef.value.play()
  if (playPromise !== undefined) {
    playPromise.then(() => {
      isPlaying.value = true
      console.log("BGM autoplay started")
    }).catch(error => {
      console.log("BGM autoplay prevented by browser, waiting for user interaction")
      isPlaying.value = false
      
      // 清除旧的监听器（如果有）
      if (startPlayListener) {
        document.removeEventListener('click', startPlayListener)
      }

      // 添加一次性点击监听器来触发播放
      startPlayListener = () => {
        if (audioRef.value && !isPlaying.value) {
          audioRef.value.play().then(() => {
            isPlaying.value = true
          })
        }
        document.removeEventListener('click', startPlayListener)
        startPlayListener = null
      }
      document.addEventListener('click', startPlayListener)
    })
  }
}

const initAudio = () => {
  if (!audioRef.value) return
  
  audioRef.value.volume = volume.value
  
  if (cachedBlobUrl.value) {
    audioRef.value.src = cachedBlobUrl.value
    isLoaded.value = true
    playAudio()
    return
  }

  // 使用 fetch 预加载音频
  const audioUrl = withBase('/background.ogg')
  console.log('Start loading BGM:', audioUrl)
  
  fetch(audioUrl)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return response.blob()
    })
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob)
      cachedBlobUrl.value = blobUrl
      
      if (audioRef.value) {
          audioRef.value.src = blobUrl
          isLoaded.value = true
          console.log('BGM loaded')
          playAudio()
      }
    })
    .catch(err => {
      console.error('Failed to load BGM:', err)
    })
}

watch(volume, (newVal) => {
  if (audioRef.value) {
    audioRef.value.volume = newVal
  }
})

watch(isEffectsEnabled, async (newVal) => {
  if (newVal) {
    await nextTick()
    initAudio()
  } else {
    isPlaying.value = false
    if (startPlayListener) {
      document.removeEventListener('click', startPlayListener)
      startPlayListener = null
    }
  }
})

onMounted(async () => {
  // Only load if effects are enabled (though v-if handles the component existence)
  if (isEffectsEnabled.value) {
    await nextTick()
    initAudio()
  }
})

onUnmounted(() => {
  if (cachedBlobUrl.value) {
    URL.revokeObjectURL(cachedBlobUrl.value)
  }
  if (startPlayListener) {
    document.removeEventListener('click', startPlayListener)
  }
})
</script>

<template>
  <div class="bgm-container" v-if="isEffectsEnabled">
    <audio ref="audioRef" loop></audio>
    <button 
      class="bgm-toggle" 
      @click="togglePlay" 
      :title="!isLoaded ? '正在加载背景音乐...' : (isPlaying ? '暂停背景音乐' : '播放背景音乐')"
      :disabled="!isLoaded"
    >
      <div class="icon-container" :class="{ playing: isPlaying }">
        <span v-if="!isLoaded" class="loading">⏳</span>
        <span v-else-if="isPlaying">🎵</span>
        <span v-else class="muted">🔇</span>
      </div>
    </button>
    <div class="volume-control">
      <input 
        type="range" 
        min="0" 
        max="0.8" 
        step="0.01" 
        v-model="volume" 
        title="音量调节"
      >
    </div>
  </div>
</template>

<style scoped>
.bgm-container {
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid var(--vp-c-divider);
  height: 24px;
  position: relative;
}

.bgm-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-1);
  transition: opacity 0.2s;
  z-index: 10;
}

.bgm-toggle:hover {
  opacity: 0.7;
}

.icon-container {
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
}

.icon-container.playing {
  animation: pulse 2s infinite;
}

.muted {
  opacity: 0.5;
  filter: grayscale(100%);
}

.volume-control {
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  display: flex;
  align-items: center;
  margin-left: 5px;
}

.bgm-container:hover .volume-control {
  width: 80px;
  opacity: 1;
}

input[type=range] {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  accent-color: var(--vp-c-brand);
  cursor: pointer;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .bgm-container {
    display: none; /* 移动端可能空间不足，视情况隐藏或调整 */
  }
}
</style>