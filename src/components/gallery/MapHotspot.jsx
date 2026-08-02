import { motion } from 'framer-motion'

const houseImages = {
  'tower-of-silence': new URL('../../assets/illustrations/houses/tower-of-silence.png', import.meta.url).href,
  'library': new URL('../../assets/illustrations/houses/library.png', import.meta.url).href,
  'cuckoo-clock-shop': new URL('../../assets/illustrations/houses/cuckoo-clock-shop.png', import.meta.url).href,
  'journey-between-books': new URL('../../assets/illustrations/houses/journey-between-books.png', import.meta.url).href,
  'playground': new URL('../../assets/illustrations/houses/playground.png', import.meta.url).href,
  'forest-lighthouse': new URL('../../assets/illustrations/houses/forest-lighthouse.png', import.meta.url).href,
  'wing-chair': new URL('../../assets/illustrations/houses/wing-chair.png', import.meta.url).href,
  'lost-time': new URL('../../assets/illustrations/houses/lost-time.png', import.meta.url).href,
  'lilliput-2': new URL('../../assets/illustrations/houses/lilliput-2.png', import.meta.url).href,
  'meeting-with-myself': new URL('../../assets/illustrations/houses/meeting-with-myself.png', import.meta.url).href,
  'memory-garden': new URL('../../assets/illustrations/houses/memory-garden.png', import.meta.url).href,
}

function MapHotspot({ hotspot, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="absolute cursor-pointer"
      style={{
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`,
        width: `${hotspot.w}%`,
        height: `${hotspot.h}%`,
      }}
    >
      <img
        src={houseImages[hotspot.id]}
        alt={hotspot.id}
        className="w-full h-full pointer-events-none"
        style={{ objectFit: 'contain' }}
        draggable={false}
      />
    </motion.div>
  )
}

export default MapHotspot