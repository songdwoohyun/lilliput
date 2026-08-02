import { motion } from 'framer-motion'

function ArtworkCard({ artwork, onClick }) {
  return (
    <motion.div
      layoutId={`card-${artwork.id}`}
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{
        layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        default: { type: 'spring', stiffness: 300, damping: 25 },
      }}
      className="cursor-pointer bg-[#faf6ee] border border-[#d8ccb4] rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-square bg-[#e8ddc7] flex items-center justify-center overflow-hidden">
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
      <div className="p-5 text-center">
        <h3 className="font-serif text-lg text-[#3a3226]">{artwork.title}</h3>
        {artwork.year && (
          <p className="text-xs text-[#8a7d63] mt-1 tracking-widest">{artwork.year}</p>
        )}
      </div>
    </motion.div>
  )
}

export default ArtworkCard