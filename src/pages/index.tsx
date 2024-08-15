import type { GetServerSideProps } from 'next'

import ArtistsGrid from '~/components/home/ArtistsGrid'
import BookingSection from '~/components/home/BookingSection'
import HomeHero from '~/components/home/HomeHero'
import ReleasesSection from '~/components/home/ReleasesSection'
import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  getArtists,
  getProductionWorks,
  getReleases,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getServerSideProps: GetServerSideProps<
  SharedPageProps & {
    artists: any
    releases: any
    // productionWorks: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const artists = await getArtists(client)
  const releases = await getReleases(client)
  // const productionWorks = await getProductionWorks(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      artists,
      releases,
      // productionWorks,
    },
  }
}

export default function IndexPage({
  artists,
  releases,
  // productionWorks,
}: {
  artists: any
  releases: any
  // productionWorks: any
}) {
  return (
    <Layout className="bg-black">
      <HomeHero />
      <ArtistsGrid artists={artists} />
      <ReleasesSection releases={releases} />
      <BookingSection />
      {/* <ProdSection productionWorks={pro/ductionWorks} /> */}
      {/* <ProjectsSection /> */}
    </Layout>
  )
}
