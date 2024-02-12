import clsx from 'clsx'
import { useRouter } from 'next/router'

import { Artist } from '~/lib/sanity.queries'

const ArtistsListMobile = ({ artists }: { artists: Artist[] }) => {
  const { query, push } = useRouter()
  const { artist } = query

  const handleArtistClick = (artist: string) => {
    push({ query: { artist } }, undefined, { shallow: true })
  }

  return (
    <ul className="max-h-[340px] overflow-y-auto space-y-5 text-center white-scrollbar lg:hidden xl:pt-5">
      {artists?.map(({ name }) => (
        <li key={name}>
          <button
            onClick={() => handleArtistClick(name)}
            className={clsx(
              'text-[43px] font-medium uppercase text-center leading-[48px] transition-all',
              { 'text-gray': artist !== name },
            )}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ArtistsListMobile
