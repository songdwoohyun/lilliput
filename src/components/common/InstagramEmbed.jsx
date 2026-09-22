function getReelId(permalink) {
  const match = permalink.match(/\/reel\/([^/?]+)/)
  return match ? match[1] : ''
}

function InstagramEmbed({ permalink }) {
  const reelId = getReelId(permalink)

  return (
    <div
      className="mx-auto overflow-hidden h-[890px]"
      style={{ maxWidth: '540px', minWidth: '326px' }}
    >
      <iframe
        src={`https://www.instagram.com/reel/${reelId}/embed/`}
        title={`Instagram reel ${reelId}`}
        className="w-full border-0 h-[1000px]"
        scrolling="no"
        allow="autoplay; encrypted-media"
        loading="lazy"
      />
    </div>
  )
}

export default InstagramEmbed
