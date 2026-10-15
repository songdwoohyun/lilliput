import { motion } from 'framer-motion'

const houseModules = import.meta.glob('../../assets/illustrations/houses/*.png', {
  eager: true,
  import: 'default',
})

const houseImages = Object.fromEntries(
  Object.entries(houseModules).map(([path, url]) => [path.split('/').pop().replace('.png', ''), url])
)

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
