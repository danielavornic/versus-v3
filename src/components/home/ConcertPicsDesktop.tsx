import { useWindowSize } from '@uidotdev/usehooks'
import clsx from 'clsx'
import { useState } from 'react'

const images = [
  '/images/concerts/desktop/1.png',
  '/images/concerts/desktop/2.png',
  '/images/concerts/desktop/3.png',
  '/images/concerts/desktop/4.png',
  '/images/concerts/desktop/5.png',
]

function ConcertPicsDesktop() {
  const [activeIndex, setActiveIndex] = useState(2)
  const { width } = useWindowSize()

  return (
    <div className="flex w-full  h-[280px] lg:h-[300px] xl:h-[340px] 1.5xl:h-[380px] mt-[-80px] lg:mt-[-72px] xl:mt-[-58px] 1.5xl:mt-[-64px] items-start overflow-x-hidden space-x-[-30px] 3xl:space-x-0 3xl:justify-between">
      {images.map((image, index) => (
        <div
          key={image}
          className={clsx(
            'w-auto object-contain relative transition-all hover:z-[4]',
            {
              'z-[3] mt-[-4px] h-[280px] lg:h-[300px] xl:h-[340px] 1.5xl:h-[380px]':
                index === activeIndex,
              'h-[220px] lg:h-[240px] xl:h-[260px] 1.5xl:h-[300px] z-[1]':
                index !== activeIndex,
            },
          )}
          onMouseEnter={() =>
            width && Number(width) >= 1900 ? setActiveIndex(index) : null
          }
          onMouseLeave={() => setActiveIndex(2)}
        >
          <img
            src={image}
            alt="Concert"
            className="w-auto h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default ConcertPicsDesktop
