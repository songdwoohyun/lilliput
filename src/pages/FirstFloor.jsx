import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useStrings } from '../i18n/strings'
import GoodsList from '../components/gallery/GoodsList'
import Lightbox from '../components/gallery/Lightbox'

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
