const HomeHero = () => {
  return (
    <section className="hero bg-black text-alm-white h-[calc(100vh-80px)]">
      <div className="container">
        <div
          className="bg-cover bg-center flex items-center justify-center h-[calc(100vh-80px)] w-full"
          style={{
            backgroundImage:
              'url(https://cdn.sanity.io/images/ny7niosc/production/e3c51799517babd4aeb8328763c42212a58a2f6b-1820x1000.png)',
          }}
        >
          <img
            src="/versus-logo.svg"
            alt="Versus Artist"
            className="versus-logo w-[200px] h-auto lg:w-[750px]"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHero
