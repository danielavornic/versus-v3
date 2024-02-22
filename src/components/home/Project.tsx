import clsx from 'clsx'
import ImageGallery from 'react-image-gallery'

import { Project as IProject } from '~/lib/sanity.queries'

const Project = ({ project }: { project: IProject }) => {
  const {
    name,
    content,
    image,
    content2,
    video,
    color,
    images: imagesLinks,
  } = project

  const images = imagesLinks?.map((src, i) => ({
    original: src,
    thumbnail: src,
  }))

  return (
    <div className="flex flex-col space-y-[70px] lg:space-y-[100px] 1.5xl:space-y-[120px]">
      <div className="relative flex flex-col lg:flex-row w-full lg:items-stretch">
        <div
          style={{ backgroundColor: color }}
          className="flex items-center justify-center lg:h-[500px] 1.5xl:h-[700px]"
        >
          <img
            src={image}
            alt={name}
            className="w-full object-contain md:max-w-[50%] lg:max-w-none lg:w-[400px] 1.5xl:w-[520px] md:mx-auto"
          />
        </div>
        {video && (
          <div className="flex-1 relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover h-full"
            >
              <source src={video} type="video/webm" />
            </video>
          </div>
        )}
        {images && (
          <ImageGallery
            items={images}
            autoPlay
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            showNav={false}
            duration={1000}
            slideInterval={2000}
          />
        )}
      </div>
      <div
        className={clsx({
          'xl:flex xl:items-center': !content2,
        })}
      >
        <h3
          className={clsx(
            'text-[33px] md:text-[42px] revealing-line !leading-tight mb-[42px] xl:w-[80%] 1.5xl:w-[50%] 2xl:w-[80%]',
            {
              'xl:mb-0': !content2,
            },
          )}
        >
          {name}
        </h3>
        <div
          className={clsx(
            'flex flex-col 2xl:flex-row 2xl:space-x-[100px] justify-between',
            {
              'xl:max-w-[700px] 2xl:max-w-none': !!content2,
            },
          )}
        >
          {typeof content === 'string' ? (
            <p className="flex-1 2xl:text-justify revealing-words">{content}</p>
          ) : (
            <div className="flex-1 2xl:text-justify revealing-words">
              {content}
            </div>
          )}
          {content2 && (
            <div className="mt-[42px] 2xl:mt-0 flex-1 2xl:pr-[10%] revealing-words 2xl:text-justify">
              {typeof content2 === 'string' ? (
                <p className="revealing-words">{content2}</p>
              ) : (
                <>{content2}</>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
