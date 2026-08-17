import { useEffect, useRef, useState } from 'react'

const CLIENT_ID = import.meta.env.VITE_NAVER_MAP_CLIENT_ID

let scriptPromise = null

function loadNaverMapsScript() {
  if (window.naver?.maps) {
    return Promise.resolve()
  }
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${CLIENT_ID}`
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load Naver Maps script'))
      document.head.appendChild(script)
    })
  }
  return scriptPromise
}

function NaverMap({ lat, lng, title, zoom = 16, className }) {
  const containerRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    loadNaverMapsScript()
      .then(() => {
        if (cancelled || !containerRef.current) return
        const position = new window.naver.maps.LatLng(lat, lng)
        const map = new window.naver.maps.Map(containerRef.current, {
          center: position,
          zoom,
        })
        new window.naver.maps.Marker({
          position,
          map,
          title,
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [lat, lng, title, zoom])

  if (failed) {
    return (
      <div className={`${className || ''} flex items-center justify-center bg-[#e8ddc7] text-[#8a7d63] text-sm`}>
        지도를 불러오지 못했습니다.
      </div>
    )
  }

  return <div ref={containerRef} role="img" aria-label={title} className={className} />
}

export default NaverMap
