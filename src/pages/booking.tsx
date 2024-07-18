/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

import ArtistsListDesktop from '~/components/booking/ArtistsListDesktop'
import ArtistsListMobile from '~/components/booking/ArtistsListMobile'
import BookingForm from '~/components/booking/BookingForm'
import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getArtists } from '~/lib/sanity.queries'

import { SharedPageProps } from './_app'

export const getServerSideProps: GetServerSideProps<
  SharedPageProps & {
    artists: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const artists = await getArtists(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      artists,
    },
  }
}

const BookingArtistsPage = ({ artists }: { artists: any }) => {
  const [artist, setArtist] = useState('')

  return (
    <Layout
      hasFooter
      hasOnlyMobileFooter
      title="Discover your next headliner"
      className="bg-black"
      fullHeight
    >
      <section className="bg-black text-white pt-[42px] lg:pt-0 h-[calc(100vh-80px)] md:min-h-0 lg:h-[calc(100vh-80px)]">
        <div
          className={clsx(
            'container relative flex flex-col lg:flex-row lg:justify-between lg:space-y-0 space-y-[85px]',
          )}
        >
          <ArtistsListMobile
            artists={artists}
            artist={artist}
            setArtist={setArtist}
          />

          <BookingForm artist={artist} setArtist={setArtist} />

          <ArtistsListDesktop
            artists={artists}
            artist={artist}
            setArtist={setArtist}
          />
        </div>
      </section>
    </Layout>
  )
}

export default BookingArtistsPage
