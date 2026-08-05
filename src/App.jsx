import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import FirstFloor from './pages/FirstFloor'
import SecondFloor from './pages/SecondFloor'
import About from './pages/About'
import Visit from './pages/Visit'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { LanguageProvider } from './i18n/LanguageContext'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first-floor" element={<FirstFloor />} />
          <Route path="/second-floor" element={<SecondFloor />} />
          <Route path="/about" element={<About />} />
          <Route path="/visit" element={<Visit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App