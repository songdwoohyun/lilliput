import street from '../assets/illustrations/about/street.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'
import { soloExhibitions, groupExhibitions } from '../i18n/exhibitions'

function ExhibitionSection({ title, items }) {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-xl text-[#3a3226] mb-3">{title}</h3>
      <div className="border-t border-[#3a3226] mb-7" />
      <div className="space-y-2 sm:space-y-5">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="text-[12.1px] sm:text-[16px] text-[#4a5943] font-semibold italic sm:w-20 sm:shrink-0">{item.date}</span>
            <span className="text-[12.1px] sm:text-[16px] text-[#3a3226] leading-relaxed">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

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

function About() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="bg-[#f0e4d3] font-vintage">
      {/* 작가 소개 섹션 */}
      <div className="px-6 sm:px-10 pt-20 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans font-bold text-2xl text-[#3a3226] mb-12">{t.about.artistIntroTitle}</h2>

          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-16">
            <div className="order-2 md:order-1 w-full md:flex-1 text-left text-[#3a3226]">
              <p className="font-bold text-3xl sm:text-4xl tracking-[0.25em] mb-3">
                김 진 순
              </p>
              <p className="font-bold italic text-3xl sm:text-4xl mb-8">
                Kim Jinsoon
              </p>
              <div className="space-y-1 mb-10">
                {t.about.credentials.map((line) => (
                  <p key={line} className="text-base">{line}</p>
                ))}
              </div>

              <div className="border-t border-[#c9bb9e] pt-10">
                <h1 className={`text-3xl sm:text-4xl ${lang === 'en' ? 'mb-10' : 'mb-1'}`}>{t.about.collectionTitle}</h1>
                {lang !== 'en' && (
                  <p className="text-base text-[#8a7d63] tracking-widest mb-10">
                    THE LILLIPUT COLLECTION
                  </p>
                )}

                <div className="space-y-6 leading-relaxed">
                  {t.about.declaration.map((paragraph, i) => (
                    <p key={i}>
                      {paragraph.map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < paragraph.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}

                  <p className="text-base text-[#8a7d63] pt-4">
                    {t.about.note.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < t.about.note.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="order-2 hidden md:block w-px bg-[#c9bb9e] self-stretch my-4" />

            <div className="order-1 md:order-3 w-full md:basis-[40%] md:shrink-0 flex justify-center md:justify-end items-center">
              <img
                src={street}
                alt={t.about.collectionTitle}
                className="w-full max-w-[440px] h-auto object-contain rounded-sm shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 연혁 섹션 */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#FFFDF9] px-6">
        <div className="max-w-5xl mx-auto px-0 sm:px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl text-[#3a3226] mb-1">{t.about.historyTitle}</h2>
            {lang !== 'en' && <p className="text-sm text-[#8a7d63] tracking-widest">HISTORY</p>}
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-16">
            <ExhibitionSection title={t.about.soloTitle} items={soloExhibitions[lang]} />
            <ExhibitionSection title={t.about.groupTitle} items={groupExhibitions[lang]} />
          </div>
        </div>
      </div>

      {/* 관람 안내 섹션 */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#e8ddc7] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl text-[#3a3226] mb-1">{t.about.guidelinesTitle}</h2>
            {lang !== 'en' && <p className="text-sm text-[#8a7d63] tracking-widest">VISITOR GUIDELINES</p>}
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
    </div>
  )
}

export default About
