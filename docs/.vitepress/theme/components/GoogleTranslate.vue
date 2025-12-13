<script setup lang="ts">
import { onMounted, ref } from 'vue'

const currentLang = ref('zh-CN')

const languages = [
  { code: 'zh-CN', label: '简体中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'ru', label: 'Русский' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' }
]

const handleLanguageChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  const lang = select.value
  
  // 设置 Google 翻译 Cookie
  // 格式: /源语言/目标语言
  // auto 表示自动检测源语言
  const cookieValue = `/auto/${lang}`
  
  document.cookie = `googtrans=${cookieValue}; path=/;`
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`
  
  // 刷新页面以应用翻译
  window.location.reload()
}

onMounted(() => {
  // 读取当前 Cookie 中的语言设置
  const cookies = document.cookie.split(';')
  const googtrans = cookies.find(c => c.trim().startsWith('googtrans='))
  if (googtrans) {
    const lang = googtrans.split('/').pop()
    if (lang && languages.some(l => l.code === lang)) {
      currentLang.value = lang
    }
  }

  // 初始化 Google 翻译（隐藏模式）
  // @ts-ignore
  window.googleTranslateElementInit = () => {
    // @ts-ignore
    new window.google.translate.TranslateElement(
      { 
        pageLanguage: 'zh-CN', 
        includedLanguages: 'en,ja,ko,ru,zh-CN,es,fr,de',
        autoDisplay: false 
      },
      'google_translate_element'
    )
  }

  const script = document.createElement('script')
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.body.appendChild(script)

  // ---------------------------------------------------------
  // 强力去广告/去横幅逻辑
  // ---------------------------------------------------------
  const observer = new MutationObserver(() => {
    // 1. 移除顶部横幅 iframe
    const banner = document.querySelector('.goog-te-banner-frame')
    if (banner) {
      banner.remove()
    }

    // 2. 强制重置 body 样式，防止页面下移
    if (document.body.style.top !== '0px' && document.body.style.top !== '') {
      document.body.style.top = '0px'
    }
    
    // 3. 移除其他可能的 Google 容器
    const frames = document.querySelectorAll('iframe[id*=":1.container"]')
    frames.forEach(frame => {
        if (frame instanceof HTMLElement) frame.style.display = 'none'
    })
  })

  observer.observe(document.body, { 
    childList: true, 
    attributes: true, 
    attributeFilter: ['style', 'class'] 
  })
})
</script>

<template>
  <div class="translate-wrapper">
    <div class="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-languages">
        <path d="m5 8 6 6"/>
        <path d="m4 14 6-8 2-2"/>
        <path d="M2 5h12"/>
        <path d="M7 2h1"/>
        <path d="m22 22-5-10-5 10"/>
        <path d="M14 18h6"/>
      </svg>
    </div>
    
    <select class="custom-select" :value="currentLang" @change="handleLanguageChange">
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.label }}
      </option>
    </select>

    <!-- 隐藏的原生组件挂载点 -->
    <div id="google_translate_element" style="display: none;"></div>
  </div>
</template>

<style>
.translate-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
}

.icon-container {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
}

.custom-select {
  appearance: none;
  background-color: transparent;
  border: none;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  padding-right: 16px; /* 为自定义箭头留出空间 */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right center;
}

.custom-select:focus {
  outline: none;
}

.custom-select option {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

/* 彻底隐藏 Google 翻译的所有 UI 元素 */
.goog-te-banner-frame.skiptranslate {
  display: none !important;
}

body {
  top: 0px !important;
}

/* 隐藏 Google 翻译的鼠标悬停提示框 (Tooltip) */
.goog-tooltip, 
#goog-gt-tt, 
.goog-te-balloon-frame {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

/* 强力覆盖 Google 翻译的高亮样式 */
.goog-text-highlight {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
  position: static !important;
  color: inherit !important;
}

/* 覆盖 hover 状态，防止鼠标悬停变色 */
.goog-text-highlight:hover {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

/* 修复翻译后的字体标签样式 */
font {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
}

/* 针对带有内联样式的 font 标签进行覆盖 */
font[style] {
  background-color: transparent !important;
  box-shadow: none !important;
}

/* 隐藏 Google 建议的弹窗 */
#goog-gt-tt {
  display: none !important;
  visibility: hidden !important;
}
</style>
