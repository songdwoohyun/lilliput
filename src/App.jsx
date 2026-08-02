import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FirstFloor from './pages/FirstFloor'
import SecondFloor from './pages/SecondFloor'
import About from './pages/About'
import Visit from './pages/Visit'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
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
  )
}

export default App