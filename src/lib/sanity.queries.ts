import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export async function getArtists(client: SanityClient): Promise<Post[]> {
  return await client.fetch(artistQuery)
}

export const artistQuery = groq`*[_type == "artist"]`

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
