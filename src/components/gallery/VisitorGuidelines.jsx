import { useLanguage } from '../../i18n/LanguageContext'
import { useStrings } from '../../i18n/strings'

const guidelineIcons = [
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8.5C3 7.67157 3.67157 7 4.5 7H7L8.2 5.2C8.4 4.9 8.8 4.7 9.2 4.7H14.8C15.2 4.7 15.6 4.9 15.8 5.2L17 7H19.5C20.3284 7 21 7.67157 21 8.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V8.5Z" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="12" cy="13" r="3.3" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="2.5" y1="21" x2="21.5" y2="3" stroke="currentColor" strokeWidth="1.3"/>
  </svg>,
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3V10.5C6 12.7091 7.79086 14.5 10 14.5C12.2091 14.5 14 12.7091 14 10.5V3" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="6" y1="6.5" x2="14" y2="6.5" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="10" y1="14.5" x2="10" y2="21" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="7" y1="21" x2="13" y2="21" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M18 3C18 3 16 5.5 16 8C16 9.65685 16.8954 10.5 18 10.5C19.1046 10.5 20 9.65685 20 8C20 5.5 18 3 18 3Z" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="18" y1="10.5" x2="18" y2="21" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="2.5" y1="21" x2="21.5" y2="3" stroke="currentColor" strokeWidth="1.3"/>
  </svg>,
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3"/>
    <text x="12" y="15.5" textAnchor="middle" fontSize="8" fontFamily="serif" fill="currentColor">12</text>
  </svg>,
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="16" rx="4.2" ry="3.4" stroke="currentColor" strokeWidth="1.3"/>
    <ellipse cx="6.2" cy="9.5" rx="1.7" ry="2.1" stroke="currentColor" strokeWidth="1.3"/>
    <ellipse cx="10.3" cy="6.3" rx="1.7" ry="2.1" stroke="currentColor" strokeWidth="1.3"/>
    <ellipse cx="13.7" cy="6.3" rx="1.7" ry="2.1" stroke="currentColor" strokeWidth="1.3"/>
    <ellipse cx="17.8" cy="9.5" rx="1.7" ry="2.1" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="2.5" y1="21" x2="21.5" y2="3" stroke="currentColor" strokeWidth="1.3"/>
  </svg>,
]

function VisitorGuidelines() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#e8ddc7] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl text-[#3a3226] mb-1">{t.about.guidelinesTitle}</h2>
          {lang !== 'en' && <p className="text-sm text-[#8a7d63] tracking-widest">VISITOR GUIDELINES</p>}
          <p className="text-sm text-[#3a3226] mt-4">{t.about.guidelinesNote}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {t.about.guidelines.map((label, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="text-[#4a5943]">{guidelineIcons[i]}</div>
              <p className="text-[#3a3226] text-base leading-relaxed">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisitorGuidelines
