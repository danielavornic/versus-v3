import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import HomeHero from '~/components/home/HomeHero'
import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getArtists } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

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

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [artists] = useLiveQuery(
    props.artists,
    props.draftMode ? readToken : undefined,
  )

  return (
    <Layout>
      <HomeHero />
    </Layout>
  )
}
