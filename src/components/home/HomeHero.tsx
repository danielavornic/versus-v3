const HomeHero = () => {
  return (
    <section className="hero bg-black text-alm-white h-[calc(100vh-80px)]">
      <div className="container relative">
        <video
          autoPlay
          muted
          loop
          poster="/images/home-video-poster.png"
          className="absolute bottom-0 left-0 right-0 top-0 z-0 w-[calc(100vw-60px)] md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] block mx-auto h-screen object-cover"
        >
          <source src="/videos/home-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default HomeHero
