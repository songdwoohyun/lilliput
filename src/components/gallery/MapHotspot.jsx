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
  'bedroom-1': new URL('../../assets/illustrations/houses/bedroom-1.png', import.meta.url).href,
  'bedroom-2': new URL('../../assets/illustrations/houses/bedroom-2.png', import.meta.url).href,
  'christmas': new URL('../../assets/illustrations/houses/christmas.png', import.meta.url).href,
  'le-corbusiers-cabin': new URL('../../assets/illustrations/houses/le-corbusiers-cabin.png', import.meta.url).href,
  'barbizon-garden': new URL('../../assets/illustrations/houses/barbizon-garden.png', import.meta.url).href,
  'tasha-tudors-cabin': new URL('../../assets/illustrations/houses/tasha-tudors-cabin.png', import.meta.url).href,
  'carl-larssons-cabin': new URL('../../assets/illustrations/houses/carl-larssons-cabin.png', import.meta.url).href,
  'ones-own-cabin': new URL('../../assets/illustrations/houses/ones-own-cabin.png', import.meta.url).href,
  'lilliput-1': new URL('../../assets/illustrations/houses/lilliput-1.png', import.meta.url).href,
}

function MapHotspot({ hotspot, onClick }) {
  const interactive = Boolean(onClick)

  return (
    <motion.div
      onClick={onClick}
      whileHover={interactive ? { scale: 1.1 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`absolute ${interactive ? 'cursor-pointer' : 'cursor-default'}`}
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