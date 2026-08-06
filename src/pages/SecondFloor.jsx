import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import artworks from '../data/artworks.json'
import hotspots from '../data/mapHotspots.json'
import MapHotspot from '../components/gallery/MapHotspot'
import ArtworkModal from '../components/gallery/ArtworkModal'
import VisitorGuidelines from '../components/gallery/VisitorGuidelines'
import mapImage from '../assets/illustrations/exhibition-map-2f-shelf.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

const houseImageModules = import.meta.glob('../assets/illustrations/houses/*.png', {
  eager: true,
  import: 'default',
})

const artworksWithImages = artworks.map((artwork) => ({
  ...artwork,
  image: houseImageModules[`../assets/illustrations/houses/${artwork.id}.png`] || artwork.image,
}))

const reservationUrl = "https://map.naver.com/p/entry/place/1838953160?placePath=%2Finformation%3Fentry%3Dplt%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608022010%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0155584&lat=37.2867261&c=15.00,0,0,0,dh"

function SecondFloor() {
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
    <div className="bg-[#f0e4d3]">
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl font-serif text-[#3a3226] mb-2">Private Exhibition Room</h1>
        <p className="text-[#8a7d63] text-sm tracking-widest mb-10">2F</p>
        <p className="text-[#3a3226] mb-6">
          {t.secondFloor.intro}
        </p>
        <a
          href={reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4a5943] text-[#f0e4d3] px-8 py-3 rounded-sm text-sm tracking-widest hover:bg-[#3a4636] transition-colors duration-300 mb-10"
        >
          {t.secondFloor.reservationBtn}
        </a>
        <p className="text-[#8a7d63] text-sm">
          {t.secondFloor.mapLabel}
        </p>
        <p className="text-[#8a7d63] text-sm sm:hidden">
          {t.secondFloor.hintMobile}
        </p>
        <p className="text-[#8a7d63] text-sm hidden sm:block">
          {t.secondFloor.hint}
        </p>
      </div>
      <Link
        to="/first-floor"
        className="fixed top-24 left-6 z-40 bg-[#4a5943] text-[#f0e4d3] text-xs tracking-widest px-4 py-2 rounded-sm hover:bg-[#3a4636] transition-colors duration-300 shadow-md"
      >
        ← 1F
      </Link>

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

      <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />

      <VisitorGuidelines />
    </div>
  )
}

export default SecondFloor