import street from '../assets/illustrations/about/street.jpg'
import { Helmet } from 'react-helmet-async'
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
            <span className="text-[12.1px] sm:text-[16px] text-[#3a3226] leading-relaxed [text-wrap:pretty]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="bg-[#f0e4d3] font-vintage">
      <Helmet>
        <title>공방 소개 | 더 릴리풋 컬렉션</title>
        <meta
          name="description"
          content="돌하우스 작가 김진순이 지난 19년간 작은 공간으로 삶을 위로하고 확장해온 이야기를 담은 더 릴리풋 컬렉션을 소개합니다. 작가 소개와 개인전·단체전 연혁, 관람 안내를 이 페이지에서 확인해보세요."
        />
      </Helmet>
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
    </div>
  )
}

export default About
