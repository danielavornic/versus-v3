import clsx from 'clsx'

import { Facebook, Instagram, TikTok, YouTube } from '~/icons'

const socials = [
  {
    icon: <TikTok />,
    link: 'https://tiktok.com',
  },
  {
    icon: <Instagram />,
    link: 'https://instagram.com',
  },
  {
    icon: <Facebook />,
    link: 'https://facebook.com',
  },
  {
    icon: <YouTube />,
    link: 'https://youtube.com',
  },
]

const LeftSocialsBar = () => {
  return (
    <div className="h-screen hidden xl:flex fixed bottom-0 left-[17px] flex-col justify-center">
      <ul className="space-y-[14px]">
        {socials.map(({ icon, link }, i) => (
          <li key={i} className="flex items-center justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'w-[18px] h-auto bg-black text-alm-white transition-all',
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
    </div>
  )
}

export default LeftSocialsBar
