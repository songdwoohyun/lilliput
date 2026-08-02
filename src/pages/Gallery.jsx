import { useState } from 'react'
import artworks from '../data/artworks.json'
import ArtworkCard from '../components/gallery/ArtworkCard'
import ArtworkModal from '../components/gallery/ArtworkModal'

function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-[#f0e4d3] px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-[#3a3226] text-center mb-2">작품 갤러리</h1>
        <p className="text-center text-[#8a7d63] text-sm tracking-widest mb-16">ARTWORK GALLERY</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onClick={() => setSelected(artwork)}
            />
          ))}
        </div>
      </div>

      <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default Gallery