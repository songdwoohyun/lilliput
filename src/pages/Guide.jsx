import { Helmet } from 'react-helmet-async'
import ExhibitionMap from '../components/gallery/ExhibitionMap'
import VisitorGuidelines from '../components/gallery/VisitorGuidelines'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

function Guide() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="bg-[#f0e4d3]">
      <Helmet>
        <title>관람 가이드 | 더 릴리풋 컬렉션</title>
        <meta
          name="description"
          content="현장에서 QR코드로 접속하는 더 릴리풋 컬렉션 2층 전시 관람 가이드 페이지입니다. 전시맵에서 작품을 누르면 제목과 제작년도를 확인할 수 있고, 사진 촬영 금지 등 관람 시 유의사항도 함께 안내합니다."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl font-serif text-[#3a3226] mb-2">{t.guide.title}</h1>
        <p className="text-[#8a7d63] text-sm tracking-widest mb-10">{t.guide.subtitle}</p>
        <p className="text-[#8a7d63] text-sm">
          {t.secondFloor.mapLabel}
        </p>
        <p className="text-[#8a7d63] text-sm">
          {t.secondFloor.hintMobile}
        </p>
      </div>

      <ExhibitionMap showDescription={true} />

      <VisitorGuidelines />
    </div>
  )
}

export default Guide
