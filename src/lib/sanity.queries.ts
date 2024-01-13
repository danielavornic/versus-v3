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

export async function getProjects(client: SanityClient): Promise<Project[]> {
  return await client.fetch(projectsQuery)
}

export async function getProductionWorks(
  client: SanityClient,
): Promise<ProductionWork[]> {
  return await client.fetch(productionWorksQuery)
}

export const artistQuery = groq`*[_type == "artist"] | order(_createdAt asc)`
export const releasesQuery = groq`*[_type == "release" && isPublished == true] | order(date desc)`
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt asc)`
export const productionWorksQuery = groq`*[_type == "productionWork"] | order(_createdAt asc)`

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
  promoVideo?: string
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

export interface Project {
  _type: 'project'
  _id: string
  _createdAt: string
  name?: string
  image?: ImageAsset
  content?: PortableTextBlock[]
  tiktok?: string
  instagram?: string
  facebook?: string
  youtube?: string
}

export interface ProductionWork {
  _type: 'productionWork'
  _id: string
  _createdAt: string
  name?: string
  artists?: string
  image?: ImageAsset
  link: string
}
