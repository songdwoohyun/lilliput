import { Link } from 'react-router-dom'

function GoodsCard({ title }) {
  return (
    <div className="bg-[#faf6ee] border border-[#d8ccb4] rounded-sm overflow-hidden shadow-sm">
      <div className="aspect-square bg-[#e8ddc7] flex items-center justify-center">
        <span className="text-[#a89b7d] text-sm">이미지 준비 중</span>
      </div>
      <div className="p-5 text-center">
        <h3 className="font-serif text-lg text-[#3a3226]">{title}</h3>
      </div>
    </div>
  )
}

function ArtworkPlaceholderCard() {
  return (
    <div className="bg-[#faf6ee] border border-[#d8ccb4] rounded-sm overflow-hidden shadow-sm">
      <div className="aspect-square bg-[#e8ddc7] flex items-center justify-center">
        <span className="text-[#a89b7d] text-sm">이미지 준비 중</span>
      </div>
      <div className="p-5 text-center">
        <h3 className="font-serif text-lg text-[#3a3226]">&nbsp;</h3>
      </div>
    </div>
  )
}

function FirstFloor() {
  const goods = ['엽서', '에코백', '수제 소품']

  return (
    <div className="min-h-screen bg-[#f0e4d3] px-4 sm:px-8 py-16">
      <Link
        to="/second-floor"
        className="fixed top-24 left-6 z-40 bg-[#4a5943] text-[#f0e4d3] text-xs tracking-widest px-4 py-2 rounded-sm hover:bg-[#3a4636] transition-colors duration-300 shadow-md"
      >
        2F →
      </Link>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-[#3a3226] text-center mb-2">
          OPEN GALLERY & ART SHOP
        </h1>
        <p className="text-center text-[#8a7d63] text-sm tracking-widest mb-10">1F</p>
        <p className="text-center text-[#3a3226] mb-10">
          돌하우스 작품 상설 전시와 굿즈를 만나볼 수 있습니다.
        </p>

        <div className="mb-32">
          <h2 className="font-serif text-2xl text-[#3a3226] text-center mb-10">GOODS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {goods.map((title) => (
              <GoodsCard key={title} title={title} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-[#3a3226] text-center mb-10">ARTWORKS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <ArtworkPlaceholderCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstFloor