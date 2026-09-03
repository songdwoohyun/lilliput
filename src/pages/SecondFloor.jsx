import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ExhibitionMap from '../components/gallery/ExhibitionMap'
import VisitorGuidelines from '../components/gallery/VisitorGuidelines'
import InstagramEmbed from '../components/common/InstagramEmbed'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

const reservationUrl = "https://map.naver.com/p/entry/place/1838953160?placePath=%2Fticket%3Fentry%3Dplt%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202609011703%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0155584&lat=37.2867261&c=15.00,0,0,0,dh"

function SecondFloor() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="bg-[#f0e4d3]">
      <Helmet>
        <title>2층 전시 안내 | 더 릴리풋 컬렉션</title>
        <meta
          name="description"
          content="더 릴리풋 컬렉션 2층은 회차당 단 1팀(1~2인)만을 모시는 100% 사전 예약제 프라이빗 전시실입니다. 40분 동안 방해 없이 작품 하나하나에 담긴 이야기와 디테일을 깊이 있게 감상하는 특별한 시간을 예약해보세요."
        />
      </Helmet>
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl font-serif text-[#3a3226] mb-2">Private Exhibition Room</h1>
        <p className="text-[#8a7d63] text-sm tracking-widest mb-10">2F</p>
        <div className="mb-10">
          <InstagramEmbed permalink="https://www.instagram.com/reel/DcvzPmAhc5P/" />
        </div>
        <p className="text-[#3a3226] mb-6">
          {t.secondFloor.intro}
        </p>
      </div>

      <Link
        to="/first-floor"
        className="fixed top-24 left-6 z-40 bg-[#4a5943] text-[#f0e4d3] text-xs tracking-widest px-4 py-2 rounded-sm hover:bg-[#3a4636] transition-colors duration-300 shadow-md"
      >
        ← 1F
      </Link>

      <div className="text-center pb-10 px-4">
        <p className="text-[#8a7d63] text-sm">
          {t.secondFloor.mapLabelPublic}
        </p>
        <p className="text-[#8a7d63] text-sm">
          {t.secondFloor.hintPublic}
        </p>
      </div>

      <ExhibitionMap showDescription={false} />

      <div className="text-center pt-14 sm:pt-16 pb-10 px-4">
        <a
          href={reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4a5943] text-[#f0e4d3] px-8 py-3 rounded-sm text-sm tracking-widest hover:bg-[#3a4636] transition-colors duration-300"
        >
          {t.secondFloor.reservationBtn}
        </a>
      </div>

      <VisitorGuidelines showPrivateRoomNote />
    </div>
  )
}

export default SecondFloor
