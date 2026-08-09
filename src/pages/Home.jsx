import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import library from '../assets/illustrations/home/library.jpg'
import shelf from '../assets/illustrations/home/shelf.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

function FloorCard({ to, image, label, alt }) {
  return (
    <Link to={to} className="relative w-full sm:w-[48%] aspect-[3/4] overflow-hidden rounded-sm block group">
      <motion.img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/70 flex items-center justify-center"
      >
        <span className="text-white text-6xl sm:text-8xl tracking-[0.15em] font-serif lining-nums">{label}</span>
      </motion.div>
    </Link>
  )
}

const reservationUrl = "https://map.naver.com/p/entry/place/1838953160?placePath=%2Finformation%3Fentry%3Dplt%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608022010%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0155584&lat=37.2867261&c=15.00,0,0,0,dh"

function Home() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="min-h-screen bg-[#f0e4d3] flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-6 py-16 flex flex-col sm:flex-row items-center justify-center gap-10">
        <FloorCard to="/first-floor" image={shelf} label="1F" alt={t.home.floor1Alt} />
        <FloorCard to="/second-floor" image={library} label="2F" alt={t.home.floor2Alt} />
        <a
          href={reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden inline-block bg-[#4a5943] text-[#f0e4d3] px-8 py-3 rounded-sm text-sm tracking-widest hover:bg-[#3a4636] transition-colors duration-300"
        >
          {t.secondFloor.reservationBtn}
        </a>
      </div>
      <p className="text-[#a89b7d] text-xs text-center px-6 pb-10">
        {t.home.copyright}
      </p>
    </div>
  )
}

export default Home