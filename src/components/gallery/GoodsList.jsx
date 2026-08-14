import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import goods from '../../data/goods.json'
import Lightbox from './Lightbox'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

const categoryImageModules = import.meta.glob('../../assets/goods/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

const toSortedImageList = (modules) =>
  Object.keys(modules)
    .sort()
    .map((path) => modules[path])

const imagesByCategory = {}
for (const path of Object.keys(categoryImageModules)) {
  const match = path.match(/\.\.\/\.\.\/assets\/goods\/([^/]+)\//)
  if (!match) continue
  const categoryId = match[1]
  if (!imagesByCategory[categoryId]) imagesByCategory[categoryId] = {}
  imagesByCategory[categoryId][path] = categoryImageModules[path]
}

const goodsWithImages = goods.map((item) => ({
  ...item,
  images: toSortedImageList(imagesByCategory[item.id] || {}),
}))

function CategoryGalleryModal({ category, onClose, onSelectImage }) {
  useLockBodyScroll(Boolean(category))

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
            data-scroll-lock-allow
            className="bg-[#faf6ee] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-sm shadow-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {category.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => onSelectImage(src)}
                  className="aspect-square overflow-hidden bg-[#e8ddc7] cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`${category.summary} ${i + 1}`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="mt-6 text-sm text-[#8a7d63] hover:text-[#3a3226] transition-colors duration-300"
            >
              ✕ 닫기
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function GoodsRow({ item, expanded, onToggleExpand, onOpenGallery }) {
  const hasImages = item.images.length > 0

  return (
    <div className="py-6 flex gap-4 sm:gap-6">
      <button
        type="button"
        onClick={() => hasImages && onOpenGallery(item)}
        className={`w-24 h-24 sm:w-32 sm:h-32 shrink-0 self-start aspect-square overflow-hidden bg-[#e8ddc7] rounded-sm ${hasImages ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {hasImages ? (
          <img
            src={item.images[0]}
            alt={item.summary}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            draggable={false}
          />
        ) : (
          <span className="w-full h-full flex items-center justify-center text-[#a89b7d] text-xs text-center px-2">
            이미지 준비 중
          </span>
        )}
      </button>

      <button
        type="button"
        onClick={onToggleExpand}
        className="relative text-left flex-1 pb-8 flex flex-col justify-start"
      >
        <p className="whitespace-pre-line text-[#3a3226] leading-relaxed">{item.summary}</p>
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <p className="whitespace-pre-line text-sm text-[#5a5040] leading-relaxed mt-3 pt-3 border-t border-[#c9bb9e]">
              {item.detail}
            </p>
          </div>
        </div>

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute bottom-0 right-0 text-[#8a7d63] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

function GoodsList() {
  const [expandedId, setExpandedId] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="max-w-2xl mx-auto divide-y divide-[#c9bb9e]">
      {goodsWithImages.map((item) => (
        <GoodsRow
          key={item.id}
          item={item}
          expanded={expandedId === item.id}
          onToggleExpand={() => setExpandedId(expandedId === item.id ? null : item.id)}
          onOpenGallery={setActiveCategory}
        />
      ))}

      <CategoryGalleryModal
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
        onSelectImage={setLightboxImage}
      />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  )
}

export default GoodsList
