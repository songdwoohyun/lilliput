import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'
import GoodsList from '../components/gallery/GoodsList'
import Lightbox from '../components/gallery/Lightbox'
import InstagramEmbed from '../components/common/InstagramEmbed'

const artworkImageModules = import.meta.glob('../assets/artworks/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

const toSortedImageList = (modules) =>
  Object.keys(modules)
    .sort()
    .map((path) => modules[path])

const artworkImages = toSortedImageList(artworkImageModules)

function SquarePhotoGrid({ images, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {images.map((src, i) => (
        <button
          key={src}
          type="button"
          onClick={() => onSelect(src)}
          className="aspect-square overflow-hidden bg-[#e8ddc7] cursor-pointer"
        >
          <img
            src={src}
            alt={`이미지 ${i + 1}`}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            draggable={false}
          />
        </button>
      ))}
    </div>
  )
}

function FirstFloor() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const { lang } = useLanguage()
  const t = useStrings(lang)

  return (
    <div className="min-h-screen bg-[#f0e4d3] px-4 sm:px-8 py-16">
      <Helmet>
        <title>1층 작품 전시 | 더 릴리풋 컬렉션</title>
        <meta
          name="description"
          content="더 릴리풋 컬렉션 1층 오픈 갤러리 & 아트샵에서는 돌하우스 작품 상설 전시와 함께 에코백, 릴리풋 문(Door) 오브제, 윙체어, 아트 포스트카드 등 작가가 직접 만든 다양한 굿즈를 직접 보고 만나보실 수 있습니다."
        />
      </Helmet>
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
        <div className="mb-10">
          <InstagramEmbed permalink="https://www.instagram.com/reel/Dcq4UwIhjxE/" />
        </div>
        <p className="text-center text-[#3a3226] mb-10">
          {t.firstFloor.intro}
        </p>

        <div className="mb-32">
          <h2 className="font-serif text-2xl text-[#3a3226] text-center mb-10">{t.firstFloor.goods}</h2>
          <GoodsList />
        </div>

        <div>
          <h2 className="font-serif text-2xl text-[#3a3226] text-center mb-10">{t.firstFloor.artworks}</h2>
          <SquarePhotoGrid images={artworkImages} onSelect={setLightboxImage} />
        </div>
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  )
}

export default FirstFloor
