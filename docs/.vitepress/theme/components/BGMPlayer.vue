<script setup>
import { ref, onMounted, watch } from 'vue'
import { useData, withBase } from 'vitepress'

const { site } = useData()
const isPlaying = ref(false)
const audioRef = ref(null)
const volume = ref(0.52) // 默认小音量

const togglePlay = () => {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(e => {
      console.error("BGM play failed:", e)
    })
  }
}

watch(volume, (newVal) => {
  if (audioRef.value) {
    audioRef.value.volume = newVal
  }
})

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = volume.value
    
    // 尝试自动播放
    const playPromise = audioRef.value.play()
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying.value = true
        console.log("BGM autoplay started")
      }).catch(error => {
        console.log("BGM autoplay prevented by browser, waiting for user interaction")
        isPlaying.value = false
        
        // 添加一次性点击监听器来触发播放
        const startPlay = () => {
          if (audioRef.value && !isPlaying.value) {
            audioRef.value.play().then(() => {
              isPlaying.value = true
            })
          }
          document.removeEventListener('click', startPlay)
        }
        document.addEventListener('click', startPlay)
      })
    }
  }
})
</script>

<template>
  <div class="bgm-container">
    <audio ref="audioRef" loop :src="withBase('/background.ogg')"></audio>
    <button 
      class="bgm-toggle" 
      @click="togglePlay" 
      :title="isPlaying ? '暂停背景音乐' : '播放背景音乐'"
    >
      <div class="icon-container" :class="{ playing: isPlaying }">
        <span v-if="isPlaying">🎵</span>
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