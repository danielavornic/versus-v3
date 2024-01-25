/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import ArtistsListDesktop from '~/components/booking/ArtistsListDesktop'
import ArtistsListMobile from '~/components/booking/ArtistsListMobile'
import BookingForm from '~/components/booking/BookingForm'
import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getArtists } from '~/lib/sanity.queries'

import { SharedPageProps } from './_app'

export const getStaticProps: GetStaticProps<
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

const BookingArtistsPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { artists } = props

  return (
    <Layout
      hasFooter
      hasOnlyMobileFooter
      title="Discover your next headliner"
      className="bg-black"
    >
      <section className="bg-black text-white pt-[42px] lg:pt-0 min-h-[calc(100vh-80px)] md:min-h-0 lg:min-h-[calc(100vh-80px)]">
        <div
          className={clsx(
            'container flex flex-col lg:flex-row lg:justify-between lg:space-y-0 space-y-[85px]',
          )}
        >
          <ArtistsListMobile artists={artists} />

          <div className="xl:pl-[60px] 2xl:pl-[100px] 3xl:pl-[126px] xl:h-[inherit] lg:w-full lg:max-w-[400px] 1.5xl:min-w-[550px] 3xl:max-w-[600px]">
            <BookingForm />
          </div>

          <ArtistsListDesktop artists={artists} />
        </div>
      </section>
    </Layout>
  )
}

export default BookingArtistsPage
