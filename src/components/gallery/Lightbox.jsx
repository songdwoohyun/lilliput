import { AnimatePresence, motion } from 'framer-motion'

function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 cursor-pointer"
        >
          <motion.img
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
            src={image}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl cursor-default"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            aria-label="닫기"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#3a3226]/90 flex items-center justify-center text-white text-2xl leading-none shadow-lg"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Lightbox
