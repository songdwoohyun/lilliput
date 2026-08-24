import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useStrings } from '../../i18n/strings'

function ComingSoonButton({ className, tooltipAlign = 'center', children }) {
  const { lang } = useLanguage()
  const t = useStrings(lang)
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [])

  const alignClass = tooltipAlign === 'center' ? 'left-1/2 -translate-x-1/2' : tooltipAlign === 'left' ? 'left-0' : 'right-0'

  return (
    <div
      ref={ref}
      className={`group relative inline-block ${className || ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full cursor-default"
      >
        {children}
      </button>
      <div
        className={`absolute z-50 bottom-full mb-2 w-64 max-w-[80vw] bg-[#3a3226] text-[#f0e4d3] text-xs leading-relaxed rounded-sm shadow-lg px-4 py-3 text-center transition-opacity duration-200 pointer-events-none ${alignClass} ${open ? 'opacity-100' : 'opacity-0'}`}
      >
        {t.common.comingSoonTooltip}
      </div>
    </div>
  )
}

export default ComingSoonButton
