import { Link } from 'react-router-dom'

function Navbar() {
  const linkStyle = "text-[#f0e4d3] hover:text-white transition-colors duration-300 text-xs sm:text-sm tracking-widest"

  return (
    <nav className="bg-[#4a5943] px-4 sm:px-8 py-5 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-base sm:text-xl font-serif text-[#f0e4d3] tracking-widest">
        THE LILLIPUT COLLECTION
      </Link>
      <div className="flex items-center gap-3 sm:gap-8">
        <div className="flex sm:hidden items-center gap-3">
          <Link to="/first-floor" className={linkStyle}>1F</Link>
          <Link to="/second-floor" className={linkStyle}>2F</Link>
        </div>
        <Link to="/about" className={linkStyle}>ABOUT</Link>
        <Link to="/visit" className={linkStyle}>VISIT</Link>
      </div>
    </nav>
  )
}

export default Navbar