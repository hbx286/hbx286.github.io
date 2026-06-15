import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type ThemeMode = 'dark' | 'light' | 'auto'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>('auto')
  const isDark = ref<boolean>(true)

  // Initialize from localStorage
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme-mode') as ThemeMode | null : null
  if (saved && ['dark', 'light', 'auto'].includes(saved)) {
    mode.value = saved
  }

  function applyTheme(dark: boolean) {
    isDark.value = dark
    const html = document.documentElement
    if (dark) {
      html.removeAttribute('data-theme')
    } else {
      html.setAttribute('data-theme', 'light')
    }
  }

  function init() {
    // 初始应用
    if (mode.value === 'auto') {
      applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
    } else {
      applyTheme(mode.value === 'dark')
    }

    // 监听系统偏好变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (mode.value === 'auto') {
        applyTheme(e.matches)
      }
    }
    mediaQuery.addEventListener('change', handler)

    // 监听 mode 变化
    watch(
      () => mode.value,
      (newMode: ThemeMode) => {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme-mode', newMode)
        }
        if (newMode === 'auto') {
          applyTheme(mediaQuery.matches)
        } else {
          applyTheme(newMode === 'dark')
        }
      }
    )
  }

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
    init,
    toggle,
    setMode,
  }
})
