import { Timer } from '../components/timer'
import * as ToggleGroup from '../components/ui/toggle-group'
import { ToggleItem } from '../@types/toggle-item'
import { usePomoStore, Mode } from '../stores/pomo'

const items: ToggleItem<Mode>[] = [
  {
    value: 'pomo',
    ariaLabel: 'Pomodoro',
    content: 'Pomodoro',
  },
  {
    value: 'short-break',
    ariaLabel: 'Short break',
    content: 'Short Break',
  },
  {
    value: 'long-break',
    ariaLabel: 'Long break',
    content: 'Long Break',
  },
]

export function Root() {
  const { mode, setMode } = usePomoStore()
  function handleValueChange(newMode: Mode) {
    if (newMode) setMode(newMode)
  }
  return (
    <div>
      <ToggleGroup.Root
        type="single"
        value={mode}
        onValueChange={handleValueChange}
        className="mb-4 w-full"
      >
        {items.map((item) => (
          <ToggleGroup.Item
            key={item.value}
            className="flex-1 px-1 py-2 "
            aria-label={item.ariaLabel}
            value={item.value}
          >
            {item.content}
            {mode === item.value && (
              <ToggleGroup.Indicator id="timer-indicator" />
            )}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
      <Timer />
    </div>
  )
}
