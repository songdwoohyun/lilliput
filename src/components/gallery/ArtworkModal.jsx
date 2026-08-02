import { motion, AnimatePresence } from 'framer-motion'

function ArtworkModal({ artwork, onClose }) {
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
            className="bg-[#faf6ee] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-sm shadow-2xl"
          >
            <div className="aspect-video bg-[#e8ddc7] flex items-center justify-center overflow-hidden">
              {artwork.image ? (
                <motion.img
                  layoutId={`image-${artwork.id}`}
                  src={artwork.image}
                  alt={artwork.title}
                  transition={{ layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[#a89b7d] text-sm">이미지 준비 중</span>
              )}
            </div>
            <div className="p-8">
              <h2 className="font-serif text-2xl text-[#3a3226]">{artwork.title}</h2>
              {artwork.titleEn && (
                <p className="text-sm italic text-[#8a7d63] mt-1">{artwork.titleEn}</p>
              )}
              {artwork.year && (
                <p className="text-xs text-[#a89b7d] mt-2 tracking-widest">{artwork.year}</p>
              )}
              <p className="text-[#5a5040] leading-relaxed mt-6 whitespace-pre-line">
                {artwork.description}
              </p>
              <button
                onClick={onClose}
                className="mt-8 text-sm text-[#8a7d63] hover:text-[#3a3226] transition-colors duration-300"
              >
                ✕ 닫기
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ArtworkModal