import { Link } from 'react-router-dom'

function Navbar() {
  const linkStyle = "text-[#f0e4d3] hover:text-white transition-colors duration-300 text-sm tracking-widest"

  return (
    <nav className="bg-[#4a5943] px-8 py-5 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-xl font-serif text-[#f0e4d3] tracking-widest">
        THE LILLIPUT COLLECTION
      </Link>
      <div className="flex gap-8">
        <Link to="/about" className={linkStyle}>ABOUT</Link>
        <Link to="/visit" className={linkStyle}>VISIT</Link>
      </div>
    </nav>
  )
}

export default Navbar