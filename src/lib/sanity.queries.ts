import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export async function getArtists(client: SanityClient): Promise<Artist[]> {
  return await client.fetch(artistQuery)
}

export async function getReleases(client: SanityClient): Promise<Release[]> {
  return await client.fetch(releasesQuery)
}

export const artistQuery = groq`*[_type == "artist"] | order(_createdAt asc)`
export const releasesQuery = groq`*[_type == "release" && isPublished == true] | order(date desc)`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Artist {
  _type: 'artist'
  _id: string
  _createdAt: string
  name?: string
  image?: ImageAsset
  tiktok?: string
  instagram?: string
  facebook?: string
  youtube?: string
  spotify?: string
  appleMusic?: string
  deezer?: string
}

export interface Release {
  _type: 'release'
  _id: string
  _createdAt: string
  name?: string
  artist?: Artist
  coverImg?: ImageAsset
  date?: string
  spotify?: string
  appleMusic?: string
  deezer?: string
  isPublished?: boolean
}
