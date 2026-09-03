import { useEffect } from 'react'

const EMBED_SCRIPT_SRC = '//www.instagram.com/embed.js'

let scriptLoadPromise = null

function loadInstagramEmbedScript() {
  if (window.instgrm) return Promise.resolve()
  if (scriptLoadPromise) return scriptLoadPromise

  scriptLoadPromise = new Promise((resolve) => {
    const existing = document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      return
    }
    const script = document.createElement('script')
    script.src = EMBED_SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    document.body.appendChild(script)
  })

  return scriptLoadPromise
}

function InstagramEmbed({ permalink }) {
  const linkWithParams = `${permalink}?utm_source=ig_embed&utm_campaign=loading`

  useEffect(() => {
    let cancelled = false

    loadInstagramEmbedScript().then(() => {
      if (!cancelled && window.instgrm) {
        window.instgrm.Embeds.process()
      }
    })

    return () => {
      cancelled = true
    }
  }, [permalink])

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned=""
        data-instgrm-permalink={linkWithParams}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: 'calc(100% - 2px)',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a href={linkWithParams} target="_blank" rel="noopener noreferrer">
            Instagram에서 이 게시물 보기
          </a>
        </div>
      </blockquote>
    </div>
  )
}

export default InstagramEmbed
