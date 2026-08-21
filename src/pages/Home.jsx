import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import heroTitleMobile from '../assets/home/hero-title-mobile.webp'
import heroBg from '../assets/home/hero-bg.webp'
import heroTitleText from '../assets/home/hero-title-text.webp'
import icon1F from '../assets/home/icon1.webp'
import icon2F from '../assets/home/icon2.webp'
import iconAbout from '../assets/home/icon3.webp'
import iconVisit from '../assets/home/icon4.webp'
import reserveButton from '../assets/home/reserve-button-flat.webp'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

const reservationUrl = "https://map.naver.com/p/entry/place/1838953160?placePath=%2Finformation%3Fentry%3Dplt%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608022010%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0155584&lat=37.2867261&c=15.00,0,0,0,dh"

function NavIcon({ to, image, alt }) {
  return (
    <Link to={to} className="shrink-0 hover:opacity-80 transition-opacity duration-300">
      <img src={image} alt={alt} className="h-20 sm:h-24 w-auto" draggable={false} />
    </Link>
  )
}

function Home() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="min-h-screen bg-[#f0e4d3]">
      <Helmet>
        <title>더 릴리풋 컬렉션 | 수원 미니어처 공방</title>
        <meta
          name="description"
          content="경기 수원시 팔달구에 위치한 돌하우스 미니어처 공방, 더 릴리풋 컬렉션입니다. 1층 오픈 갤러리에서는 작품 상설 전시와 에코백·윙체어 등 오리지널 굿즈를, 2층 프라이빗 전시실에서는 예약제로 진행되는 특별한 미니어처 작품을 만나보실 수 있습니다."
        />
      </Helmet>

      {/* 히어로: 모바일은 세로 이미지 그대로, 데스크탑은 위아래를 크롭한 와이드 배너 */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <img
          src={heroTitleMobile}
          alt={t.home.heroAlt}
          className="sm:hidden w-full h-auto block"
          draggable={false}
        />
        <div className="hidden sm:block relative w-full h-[320px] md:h-[380px] lg:h-[440px] overflow-hidden">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <img
              src={heroTitleText}
              alt={t.home.heroAlt}
              className="w-full max-w-md lg:max-w-lg h-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* 소파 아이콘 내비게이션 */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 px-6 py-10 sm:py-14">
          <NavIcon to="/first-floor" image={icon1F} alt={t.home.floor1Alt} />
          <NavIcon to="/second-floor" image={icon2F} alt={t.home.floor2Alt} />
          <NavIcon to="/about" image={iconAbout} alt={t.home.aboutAlt} />
          <NavIcon to="/visit" image={iconVisit} alt={t.home.visitAlt} />
        </div>

        {/* 2F 예약하러 가기 */}
        <a
          href={reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-2xl px-6 hover:opacity-90 transition-opacity duration-300"
        >
          <img
            src={reserveButton}
            alt={t.home.reserveAlt}
            className="w-full h-auto rounded-sm shadow-md"
            draggable={false}
          />
        </a>

        <p className="text-[#a89b7d] text-xs text-center px-6 py-10">
          {t.home.copyright}
        </p>
      </div>
    </div>
  )
}

export default Home
