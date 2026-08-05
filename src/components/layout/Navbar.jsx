import { Link } from 'react-router-dom'
import logoStacked from '../../assets/logo/lilliput-logo-stacked.png'
import logoHorizontal from '../../assets/logo/lilliput-logo-horizontal.png'

function Navbar() {
  const linkStyle = "text-[#f0e4d3] hover:text-white transition-colors duration-300 text-xs sm:text-sm tracking-widest"

  return (
    <nav className="bg-[#4a5943] px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="shrink-0">
        <img src={logoStacked} alt="THE LILLIPUT COLLECTION" className="h-14 sm:hidden w-auto" />
        <img src={logoHorizontal} alt="THE LILLIPUT COLLECTION" className="hidden sm:block sm:h-10 w-auto" />
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