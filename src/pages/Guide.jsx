import ExhibitionMap from '../components/gallery/ExhibitionMap'
import VisitorGuidelines from '../components/gallery/VisitorGuidelines'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

function Guide() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="bg-[#f0e4d3]">
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
