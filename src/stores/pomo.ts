import { create } from 'zustand'
import { useSettingsStore } from './settings'

export type Mode = 'pomo' | 'short-break' | 'long-break'

interface PomoStore {
  mode: Mode
  activeTime: number
  setMode: (m: Mode) => void
}

function getDuration(mode: Mode) {
  const { pomoDuration, longBreakDuration, shortBreakDuration } =
    useSettingsStore.getState()

  if (mode === 'pomo') return pomoDuration
  if (mode === 'short-break') return shortBreakDuration
  if (mode === 'long-break') return longBreakDuration
}

export const usePomoStore = create<PomoStore>()((set) => ({
  mode: 'pomo',
  activeTime: 25 * 60,
  setMode: (newMode) => {
    const newTime = getDuration(newMode)
    set((state) => ({ ...state, mode: newMode, activeTime: newTime }))
  },
}))
