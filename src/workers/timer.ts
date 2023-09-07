// timerWorker.js
let timer: ReturnType<typeof setInterval>
let start: number | null
let expected: number | null

type Command = 'start' | 'pause' | 'reset' | 'tick'

type Data = {
  command: Command
  interval: number
}

self.onmessage = (e: MessageEvent<Data>) => {
  const { command, interval } = e.data
  switch (command) {
    case 'start':
      setTimeout(() => startTimer(interval), interval)
      break
    case 'pause':
      pauseTimer()
      break
    case 'reset':
      resetTimer()
      break
  }
}
function startTimer(interval: number) {
  start = performance.now()
  expected = start

  function step() {
    const now = performance.now()
    const drift = now - expected!

    if (drift > interval) {
      // If the drift is larger than the interval, reset the timer
      start = now
      expected = now + interval
    } else {
      const delay = Math.max(0, interval - drift)
      timer = setTimeout(step, delay)

      // Send updated time to the main thread
      self.postMessage({ command: 'tick', time: interval - drift })
      start! += interval
      expected! += interval
    }
  }

  step()
}

function pauseTimer() {
  clearTimeout(timer)
}

function resetTimer() {
  clearTimeout(timer)
  start = null
  expected = null
}
