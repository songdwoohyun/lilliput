function getReelId(permalink) {
  const match = permalink.match(/\/reel\/([^/?]+)/)
  return match ? match[1] : ''
}

function InstagramEmbed({ permalink }) {
  const reelId = getReelId(permalink)

  return (
    <div className="flex justify-center">
      <iframe
        src={`https://www.instagram.com/reel/${reelId}/embed/`}
        title={`Instagram reel ${reelId}`}
        className="w-full border-0 h-[660px] md:h-[1100px]"
        style={{ maxWidth: '540px', minWidth: '326px' }}
        allow="autoplay; encrypted-media"
        loading="lazy"
      />
    </div>
  )
}

export default InstagramEmbed
