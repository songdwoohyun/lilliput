import { useState } from 'react'
import { Link } from 'react-router-dom'
import artworks from '../data/artworks.json'
import hotspots from '../data/mapHotspots.json'
import MapHotspot from '../components/gallery/MapHotspot'
import ArtworkModal from '../components/gallery/ArtworkModal'
import mapImage from '../assets/illustrations/exhibition-map-2f-shelf.jpg'

const houseImageModules = import.meta.glob('../assets/illustrations/houses/*.png', {
  eager: true,
  import: 'default',
})

const artworksWithImages = artworks.map((artwork) => ({
  ...artwork,
  image: houseImageModules[`../assets/illustrations/houses/${artwork.id}.png`] || artwork.image,
}))

function SecondFloor() {
  const [selected, setSelected] = useState(null)

  const findArtwork = (id) => artworksWithImages.find((a) => a.id === id)

  return (
    <div className="bg-[#f0e4d3]">
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl font-serif text-[#3a3226] mb-2">Private Exhibition Room</h1>
        <p className="text-[#8a7d63] text-sm tracking-widest mb-10">2F</p>
        <p className="text-[#3a3226] mb-10">
          예약제 돌하우스 특별 전시입니다.
        </p>
        <p className="text-[#8a7d63] text-sm">
          집 그림 위에 마우스를 올리거나 클릭해서 작품 설명을 확인해보세요.
        </p>
      </div>
      <Link
        to="/first-floor"
        className="fixed top-24 left-6 z-40 bg-[#4a5943] text-[#f0e4d3] text-xs tracking-widest px-4 py-2 rounded-sm hover:bg-[#3a4636] transition-colors duration-300 shadow-md"
      >
        ← 1F
      </Link>

      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
        <img
          src={mapImage}
          alt="2층 전시 지도"
          className="w-full h-auto select-none"
          draggable={false}
        />
        {hotspots.map((h, i) => (
          <MapHotspot
            key={`${h.id}-${i}`}
            hotspot={h}
            onClick={() => setSelected(findArtwork(h.id))}
          />
        ))}
      </div>

      <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default SecondFloor