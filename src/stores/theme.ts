import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type ThemeMode = 'dark' | 'light' | 'auto'

// 内存存储（用于无痕模式）
let memoryMode: ThemeMode = 'auto'
const memoryIsDark: boolean = true

function isLocalStorageAvailable(): boolean {
  try {
    const test = '__storage_test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch {
    return false
  }
}

function getThemeModeFromStorage(): ThemeMode {
  if (isLocalStorageAvailable()) {
    const saved = localStorage.getItem('theme-mode') as ThemeMode | null
    if (saved && ['dark', 'light', 'auto'].includes(saved)) {
      return saved
    }
  }
  return memoryMode
}

function setThemeModeToStorage(mode: ThemeMode) {
  memoryMode = mode
  if (isLocalStorageAvailable()) {
    localStorage.setItem('theme-mode', mode)
  }
}

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>(getThemeModeFromStorage())
  const isDark = ref<boolean>(memoryIsDark)

  function applyTheme(dark: boolean) {
    isDark.value = dark
    const html = document.documentElement
    if (dark) {
      html.removeAttribute('data-theme')
    } else {
      html.setAttribute('data-theme', 'light')
    }
  }

  // 存储当前监听器引用
  let mediaQueryListener: ((e: MediaQueryListEvent) => void) | null = null

  // 使用 watch 的 immediate: true 来初始化主题
  watch(
    () => mode.value,
    (newMode: ThemeMode) => {
      // 移除旧的监听器
      if (mediaQueryListener) {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', mediaQueryListener)
        mediaQueryListener = null
      }

      setThemeModeToStorage(newMode)

      if (newMode === 'auto') {
        // 应用当前系统偏好
        applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
        // 添加新的监听器
        mediaQueryListener = (e: MediaQueryListEvent) => {
          applyTheme(e.matches)
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mediaQueryListener)
      } else {
        applyTheme(newMode === 'dark')
      }
    },
    { immediate: true }
  )

  function toggle() {
    const modes: readonly ThemeMode[] = ['dark', 'light', 'auto'] as const
    const currentIndex = modes.indexOf(mode.value)
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % modes.length : 0
    mode.value = modes[nextIndex]!
  }

  function setMode(newMode: ThemeMode) {
    mode.value = newMode
  }

  return {
    mode,
    isDark,
    toggle,
    setMode,
  }
})
