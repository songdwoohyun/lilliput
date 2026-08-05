import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { languageNames } from '../../i18n/strings'

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const otherLangs = Object.keys(languageNames).filter((code) => code !== lang)

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-[92px] text-center text-[#d8ccb4] hover:text-white transition-colors duration-300 text-xs tracking-widest border border-[#6b7862] px-3 py-1.5 rounded-sm hover:border-white"
      >
        {languageNames[lang]} ▼
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#3a4636] border border-[#6b7862] rounded-sm overflow-hidden shadow-lg z-10">
          {otherLangs.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLang(code)
                setOpen(false)
              }}
              className="block w-full whitespace-nowrap px-4 py-2 text-xs tracking-widest text-[#d8ccb4] hover:text-white hover:bg-[#4a5943] transition-colors duration-300"
            >
              {languageNames[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Footer() {
  const address = "경기 수원시 팔달구 화서문로71번길 21"
  const naverMapUrl = "https://map.naver.com/p/entry/place/1838953160?placePath=%2Finformation%3Fentry%3Dplt%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608022010%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0155584&lat=37.2867261&c=15.00,0,0,0,dh"

  return (
    <footer className="bg-[#4a5943] py-12 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">

          <a
            href="https://www.instagram.com/lilliput2014"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d8ccb4] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>

          <a
            href={naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d8ccb4] hover:text-white transition-colors duration-300 text-xs tracking-widest border border-[#6b7862] px-3 py-1.5 rounded-sm hover:border-white"
          >
            NAVER PLACE
          </a>

          <LanguageSwitcher />
        </div>

        <p className="text-[#d8ccb4] text-xs tracking-widest">
          THE LILLIPUT COLLECTION
        </p>
        <p className="text-[#8a9481] text-xs text-center">
          {address} · 010-9012-4940
        </p>
      </div>
    </footer>
  )
}

export default Footer
