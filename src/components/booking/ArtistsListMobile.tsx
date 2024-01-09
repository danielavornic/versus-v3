import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Artist } from '~/lib/sanity.queries'

const ArtistsListMobile = ({ artists }: { artists: Artist[] }) => {
  const { query } = useRouter()
  const { artist } = query

  return (
    <ul className="max-h-[340px] overflow-y-auto space-y-5 text-center white-scrollbar lg:hidden xl:pt-5">
      {artists?.map(({ name }) => (
        <li key={name}>
          <Link
            href={`/booking/artists/?artist=${name}`}
            className={clsx(
              'text-[43px] font-medium uppercase text-center leading-[48px] transition-all',
              { 'text-gray': artist !== name },
            )}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ArtistsListMobile
