import BlockContent from '@sanity/block-content-to-react'

import { Facebook, Instagram, TikTok, YouTube } from '~/icons'
import { urlForImage } from '~/lib/sanity.image'
import { Project as IProject } from '~/lib/sanity.queries'

const serializers = {
  list: (props) => {
    const { type } = props
    const bullet = type === 'bullet'
    return bullet ? (
      <ul className="list-disc list-inside mb-[20px] revealing-words">
        {props.children}
      </ul>
    ) : (
      <ol className="list-decimal">{props.children}</ol>
    )
  },

  types: {
    block: (props) => {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>
        case 'h2':
          return <h2>{props.children}</h2>
        default:
          return <p className="mb-[20px] revealing-words">{props.children}</p>
      }
    },
  },
}

const Project = ({ project }: { project: IProject }) => {
  const { name, content, image, tiktok, facebook, instagram, youtube } = project

  return (
    <div className="flex flex-col space-y-[70px] lg:flex-row lg:space-x-[42px] lg:space-y-0 xl:space-x-[70px]">
      <div className="relative">
        <div className="mb-[42px] z-[1] lg:absolute lg:top-[26px] lg:left-[26px] flex justify-center items-center space-x-[42px] lg:space-x-[14px]">
          <a
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[34px] lg:w-[15px]"
          >
            <TikTok />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] lg:w-[16px]"
          >
            <Instagram />
          </a>
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[23px] lg:w-[10px]"
          >
            <Facebook />
          </a>
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] lg:w-[17px]"
          >
            <YouTube />
          </a>
        </div>

        <img
          src={urlForImage(image)?.url()}
          alt={name}
          className="w-full object-contain md:max-w-[50%] lg:max-w-none lg:min-w-[400px] 1.5xl:min-w-[450px] md:mx-auto"
        />
      </div>
      <div>
        <h3 className="text-[42px] revealing-line !leading-tight uppercase mb-[42px]">
          {name}
        </h3>
        <BlockContent
          blocks={content}
          serializers={serializers}
          className="lg:max-w-[707px]"
        />
      </div>
    </div>
  )
}

export default Project
