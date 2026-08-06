import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'

function Visit() {
  const { lang } = useLanguage()
  const t = useStrings(lang)
  const address = "경기 수원시 팔달구 화서문로71번길 21"
  const naverMapUrl = "https://map.naver.com/p/entry/place/1838953160?placePath=%2Finformation%3Fentry%3Dplt%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608022010%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0155584&lat=37.2867261&c=15.00,0,0,0,dh"
  const reservationUrl = naverMapUrl // TODO: 정식 네이버 예약 링크로 교체 예정

  return (
    <div className="min-h-screen bg-[#f0e4d3]">
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl font-serif text-[#3a3226] mb-2">{t.visit.title}</h1>
        <p className="text-[#8a7d63] text-sm tracking-widest">VISIT · RESERVATION</p>
      </div>

      {/* 지도 */}
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[50vh] min-h-[320px]">
        <iframe
          title={t.visit.mapTitle}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* 상세정보 */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#f0e4d3] py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <dl className="space-y-6">
            <div>
              <dt className="text-xs text-[#8a7d63] tracking-widest mb-1">ADDRESS</dt>
              <dd className="text-[#3a3226] font-serif text-lg">{address}</dd>
            </div>
            <div>
              <dt className="text-xs text-[#8a7d63] tracking-widest mb-1">HOURS</dt>
              <dd className="text-[#3a3226] space-y-0.5">
                <p>{t.visit.weekday} 13:00 ~ 19:00</p>
                <p>{t.visit.weekend} 11:00 ~ 20:00</p>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#8a7d63] tracking-widest mb-1">CLOSED</dt>
              <dd className="text-[#3a3226]">{t.visit.closed}</dd>
            </div>
            <div>
              <dt className="text-xs text-[#8a7d63] tracking-widest mb-1">CONTACT</dt>
              <dd className="text-[#3a3226]">010-9012-4940</dd>
            </div>
          </dl>

          <a
            href={`https://map.naver.com/p/search/${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center border border-[#4a5943] text-[#4a5943] py-3 rounded-sm text-sm tracking-wide hover:bg-[#4a5943] hover:text-[#f0e4d3] transition-colors duration-300"
          >
            {t.visit.directions}
          </a>
        </div>
      </div>

      {/* 진한 색 밴드: 예약 */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#4a5943] py-16 px-6 border-b border-[#6b7862]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#d8ccb4] text-sm mb-4">{t.visit.reservationNote}</p>

          <a
            href={reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f0e4d3] text-[#3a3226] px-10 py-4 rounded-sm text-sm tracking-widest hover:bg-white transition-colors duration-300"
          >
            {t.visit.reservationBtn}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Visit
