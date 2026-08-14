import { Link } from 'react-router-dom'
import ExhibitionMap from '../components/gallery/ExhibitionMap'
import VisitorGuidelines from '../components/gallery/VisitorGuidelines'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

const reservationUrl = "https://map.naver.com/p/entry/place/1838953160?placePath=%2Finformation%3Fentry%3Dplt%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608022010%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0155584&lat=37.2867261&c=15.00,0,0,0,dh"

function SecondFloor() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

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

      <ExhibitionMap showDescription={false} />

      <VisitorGuidelines />
    </div>
  )
}

export default SecondFloor
