import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsStore {
  pomoDuration: number
  shortBreakDuration: number
  longBreakDuration: number
  setPomo: (t: number) => void
  setShortBreak: (t: number) => void
  setLongBreak: (t: number) => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      pomoDuration: 25 * 60 * 1000,
      shortBreakDuration: 5 * 60 * 1000,
      longBreakDuration: 15 * 60 * 1000,
      setPomo: (newTime) =>
        set((state) => ({ ...state, pomoDuration: newTime })),
      setShortBreak: (newTime) =>
        set((state) => ({ ...state, shortBreakDuration: newTime })),
      setLongBreak: (newTime) =>
        set((state) => ({ ...state, longBreakDuration: newTime })),
    }),
    { name: 'pomo-settings' },
  ),
)
