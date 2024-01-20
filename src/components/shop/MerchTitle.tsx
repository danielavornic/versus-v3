import clsx from 'clsx'
import Link from 'next/link'

interface MerchTitleProps {
  mobileTitle: string
  desktopTitle: string
  hideGrayTitles?: boolean
  link?: string
}

const MerchTitle = ({
  mobileTitle,
  desktopTitle,
  hideGrayTitles,
  link,
}: MerchTitleProps) => {
  const innerComponenet = (
    <div className="pt-[43px] lg:pt-[34px] pb-[42px] md:pb-[120px] lg:pb-[160px] 1.5xl:pb-[214px]">
      <h1 className="text-black revealing-line leading-tight text-[48px] uppercase font-bold text-center md:hidden">
        {mobileTitle}
      </h1>

      <div className="text-[60px] leading-[1] space-x-[7px] xl:text-[72px] 1.5xl:text-[94px] absolute whitespace-nowrap overflow-hidden left-1/2 -translate-x-1/2 uppercase font-bold hidden md:flex">
        <span
          className={clsx('text-alm-white revealing-line', {
            'text-transparent': hideGrayTitles,
          })}
        >
          MERCH MERCH
        </span>
        <div className="flex items-start pr-[18px] xl:pr-[30px] 1.5xl:pr-[24px]">
          <h1 className="text-black">{desktopTitle}</h1>
          <img
            src="/versus-icon-black.svg"
            alt="versus merch"
            className="w-[20px] xl:w-[30px] 1.5xl:w-[45px]"
          />
        </div>
        <span
          className={clsx('text-alm-white revealing-line', {
            'text-transparent': hideGrayTitles,
          })}
        >
          MERCH MERCH
        </span>
      </div>
    </div>
  )

  if (link) {
    return <Link href={link}>{innerComponenet}</Link>
  }

  return innerComponenet
}

export default MerchTitle
