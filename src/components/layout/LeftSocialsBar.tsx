import clsx from 'clsx'
import Div100vh from 'react-div-100vh'

import { Facebook, Instagram, TikTok, YouTube } from '~/icons'
import { useAppSelector } from '~/store/hooks'

const socials = [
  {
    icon: <TikTok />,
    link: 'https://www.tiktok.com/@versusartist_musiclabel',
  },
  {
    icon: <Instagram />,
    link: 'https://www.instagram.com/versusartist/',
  },
  {
    icon: <Facebook />,
    link: 'https://www.facebook.com/VersusArtistsLabel/',
  },
  {
    icon: <YouTube />,
    link: 'https://www.youtube.com/@versusartist',
  },
]

const LeftSocialsBar = () => {
  const socialsLinks = useAppSelector((state) => state.socials)

  if (socialsLinks) {
    socials.forEach((social, i) => {
      social.link = Object.values(socialsLinks)[i]
    })
  }

  return (
    <Div100vh className="hidden xl:flex fixed bottom-0 z-[10] left-[17px] flex-col justify-center">
      <ul className="space-y-[14px]">
        {socials.map(({ icon, link }, i) => (
          <li key={i} className="flex items-center justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'w-[18px] h-auto bg-transparent text-alm-white transition-all',
                {
                  'hover:text-tiktok': i === 0,
                  'hover:text-instagram': i === 1,
                  'hover:text-facebook !w-[11px]': i === 2, // Facebook icon is smaller
                  'hover:text-youtube': i === 3,
                },
              )}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </Div100vh>
  )
}

export default LeftSocialsBar
