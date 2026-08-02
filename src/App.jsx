import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Artist from './pages/Artist'
import Gallery from './pages/Gallery'
import ExhibitionMap from './pages/ExhibitionMap'
import Visit from './pages/Visit'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/exhibition-map" element={<ExhibitionMap />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App