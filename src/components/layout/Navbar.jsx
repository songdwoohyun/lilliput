import { Link } from 'react-router-dom'

function Navbar() {
  const linkStyle = "text-[#f0e4d3] hover:text-white transition-colors duration-300 text-sm tracking-wide"

  return (
    <nav className="bg-[#4a5943] px-8 py-5 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-xl font-serif text-[#f0e4d3] tracking-widest">
        THE LILLIPUT COLLECTION
      </Link>
      <div className="flex gap-8">
        <Link to="/about" className={linkStyle}>돌하우스란?</Link>
        <Link to="/artist" className={linkStyle}>작가 소개</Link>
        <Link to="/gallery" className={linkStyle}>작품 갤러리</Link>
        <Link to="/exhibition-map" className={linkStyle}>전시관 안내</Link>
        <Link to="/visit" className={linkStyle}>오시는 길</Link>
      </div>
    </nav>
  )
}

export default Navbar