import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import ArtistsGrid from '~/components/home/ArtistsGrid'
import BookingSection from '~/components/home/BookingSection'
import Conceptualization from '~/components/home/Conceptualization'
import ConcertsSection from '~/components/home/ConcertsSection'
import HomeHero from '~/components/home/HomeHero'
import ProdSection from '~/components/home/ProdSection'
import ProjectsSection from '~/components/home/ProjectsSection'
import ReleasesSection from '~/components/home/ReleasesSection'
import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  getArtists,
  getProductionWorks,
  getProjects,
  getReleases,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    artists: any
    releases: any
    productionWorks: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const artists = await getArtists(client)
  const releases = await getReleases(client)
  const productionWorks = await getProductionWorks(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      artists,
      releases,
      productionWorks,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { artists, releases, productionWorks } = props

  return (
    <Layout>
      <HomeHero />
      <ArtistsGrid artists={artists} />
      <ReleasesSection releases={releases} />
      <BookingSection />
      <ProdSection productionWorks={productionWorks} />
      <ProjectsSection />
    </Layout>
  )
}
