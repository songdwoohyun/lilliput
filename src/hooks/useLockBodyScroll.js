import { useEffect } from 'react'

const SCROLL_KEYS = new Set([
  'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'PageUp', 'PageDown', 'Home', 'End', ' ',
])

// Locks background scroll without touching `overflow`, so the scrollbar
// stays visible and the page never shifts width when a modal opens.
// Scroll-causing input (wheel/touch/keys) is blocked outright so the page
// never moves at all; a `scroll` listener acts only as a fallback for
// interactions that can't be preventDefault()-ed, like dragging the
// scrollbar thumb itself.
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return

    const x = window.scrollX
    const y = window.scrollY

    const isInsideAllowedArea = (target) =>
      target instanceof Element && target.closest('[data-scroll-lock-allow]')

    const preventScroll = (e) => {
      if (isInsideAllowedArea(e.target)) return
      e.preventDefault()
    }

    const preventKeyScroll = (e) => {
      if (!SCROLL_KEYS.has(e.key)) return
      if (isInsideAllowedArea(e.target)) return
      e.preventDefault()
    }

    const resetScroll = () => window.scrollTo(x, y)

    window.addEventListener('wheel', preventScroll, { passive: false })
    window.addEventListener('touchmove', preventScroll, { passive: false })
    window.addEventListener('keydown', preventKeyScroll, { passive: false })
    window.addEventListener('scroll', resetScroll)

    return () => {
      window.removeEventListener('wheel', preventScroll)
      window.removeEventListener('touchmove', preventScroll)
      window.removeEventListener('keydown', preventKeyScroll)
      window.removeEventListener('scroll', resetScroll)
    }
  }, [locked])
}
