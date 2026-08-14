import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import artworks from '../../data/artworks.json'
import hotspots from '../../data/mapHotspots.json'
import MapHotspot from './MapHotspot'
import ArtworkModal from './ArtworkModal'
import mapImage from '../../assets/illustrations/exhibition-map-2f-shelf.jpg'
import { useLanguage } from '../../i18n/LanguageContext'
import { useStrings } from '../../i18n/strings'

const houseImageModules = import.meta.glob('../../assets/illustrations/houses/*.png', {
  eager: true,
  import: 'default',
})

const artworksWithImages = artworks.map((artwork) => ({
  ...artwork,
  image: houseImageModules[`../../assets/illustrations/houses/${artwork.id}.png`] || artwork.image,
}))

function ExhibitionMap({ showDescription = true }) {
  const [selected, setSelected] = useState(null)
  const [showScrollHint, setShowScrollHint] = useState(true)
  const { lang } = useLanguage()
  const t = useStrings(lang)

  const findArtwork = (id) => artworksWithImages.find((a) => a.id === id)

  const handleMapScroll = (e) => {
    if (showScrollHint && e.currentTarget.scrollLeft > 12) {
      setShowScrollHint(false)
    }
  }

  return (
    <>
      <div
        className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-x-auto"
        onScroll={handleMapScroll}
      >
        <div className="relative w-full min-w-[1100px]">
          <img
            src={mapImage}
            alt="2층 전시 지도"
            className="w-full h-auto select-none"
            draggable={false}
          />
          {hotspots.map((h, i) => (
            <MapHotspot
              key={`${h.id}-${i}`}
              hotspot={h}
              onClick={() => setSelected(findArtwork(h.id))}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-30 md:hidden pointer-events-none">
          <div className="sticky left-0 top-4">
            <AnimatePresence>
              {showScrollHint && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 inline-flex items-center whitespace-nowrap rounded-full bg-[#4a5943]/90 px-3 py-1.5 text-xs text-[#f0e4d3] shadow-md"
                >
                  {t.secondFloor.scrollHint}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <ArtworkModal artwork={selected} onClose={() => setSelected(null)} showDescription={showDescription} />
    </>
  )
}

export default ExhibitionMap
