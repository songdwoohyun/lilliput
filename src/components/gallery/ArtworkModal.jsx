import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useStrings } from '../../i18n/strings'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

function localize(artwork, lang) {
  if (!artwork) return artwork
  if (lang === 'ko') {
    return { title: artwork.title, subtitle: artwork.titleEn, year: artwork.year, description: artwork.description }
  }
  if (lang === 'ja') {
    return {
      title: artwork.titleJa || artwork.title,
      subtitle: artwork.title,
      year: artwork.year_ja || artwork.year,
      description: artwork.description_ja || artwork.description,
    }
  }
  return {
    title: artwork.titleEn || artwork.title,
    subtitle: artwork.title,
    year: artwork.year_en || artwork.year,
    description: artwork.description_en || artwork.description,
  }
}

function ArtworkModal({ artwork, onClose, showDescription = true }) {
  const { lang } = useLanguage()
  const t = useStrings(lang)
  const localized = localize(artwork, lang)
  useLockBodyScroll(Boolean(artwork))

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
        >
          <motion.div
            layoutId={`card-${artwork.id}`}
            onClick={(e) => e.stopPropagation()}
            transition={{ layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
            data-scroll-lock-allow
            className="bg-[#faf6ee] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-sm shadow-2xl"
          >
            <div className="sticky top-3 z-10 h-0 flex justify-end pr-3">
              <button
                type="button"
                onClick={onClose}
                aria-label={t.modal.close}
                className="w-9 h-9 rounded-full bg-[#3a3226]/90 flex items-center justify-center text-white text-lg leading-none shadow-lg"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 className="font-serif text-2xl text-[#3a3226]">{localized.title}</h2>
              {localized.subtitle && (
                <p className="text-sm italic text-[#8a7d63] mt-1">{localized.subtitle}</p>
              )}
              {localized.year && (
                <p className="text-xs text-[#a89b7d] mt-2 tracking-widest">{localized.year}</p>
              )}
              {showDescription && (
                <p className="text-[#5a5040] leading-relaxed mt-6 whitespace-pre-line">
                  {localized.description}
                </p>
              )}
              <button
                onClick={onClose}
                className="mt-8 text-sm text-[#8a7d63] hover:text-[#3a3226] transition-colors duration-300"
              >
                {t.modal.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ArtworkModal