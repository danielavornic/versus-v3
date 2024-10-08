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

export async function getProductsByArtist(
  client: SanityClient,
  artistId: string,
): Promise<Product[]> {
  return await client.fetch(productsByArtistQuery, { artistId })
}

export async function getProductionWorks(
  client: SanityClient,
): Promise<ProductionWork[]> {
  return await client.fetch(productionWorksQuery)
}

export async function getProductVariant(
  client: SanityClient,
): Promise<ProductVariant[]> {
  return await client.fetch(productVariantQuery)
}

export async function getProductBySlug(
  client: SanityClient,
  slug: string,
): Promise<Product> {
  return await client.fetch(productBySlugQuery, { slug })
}

export async function getProductById(
  client: SanityClient,
  id: string,
): Promise<Product> {
  return await client.fetch(productByIdQuery, { id })
}

export const artistQuery = groq`*[_type == "artist"] | order(_createdAt asc)`
export const releasesQuery = groq`*[_type == "release" && isPublished == true] | order(date desc)`
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt asc)`
export const productionWorksQuery = groq`*[_type == "productionWork"] | order(_createdAt asc)`
export const productsByArtistQuery = groq`*[_type == "product" && artist == $artistId]`
export const productVariantQuery = groq`*[_type == "productVariant"]`
export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]`
export const productByIdQuery = groq`*[_type == "product" && _id == $id][0]`

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
interface ProductVariant {
  color: 'black' | 'green' | 'white' | 'pink'
  product: Product // slug
}

export interface Product {
  _type: 'product'
  _id: string
  _createdAt: string
  title: string
  slug: Slug
  artist: any
  mainImage: ImageAsset
  backImage: ImageAsset
  price: number
  variants: ProductVariant[]
  relatedProducts?: Product[]
  category: 'tshirt' | 'hoodie' | 'longsleeve' | 'Album CD' | 'Carnet'
  color: 'black' | 'green' | 'white' | 'pink'
  inStock?: boolean
  inStockXS?: boolean
  inStockS?: boolean
  inStockM?: boolean
  inStockL?: boolean
}

export interface Artist {
  toLowerCase(): unknown
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
  tiktok2?: string
  instagram2?: string
  facebook2?: string
  youtube2?: string
  spotify?: string
  appleMusic?: string
  deezer?: string
  spotify2?: string
  appleMusic2?: string
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
  name?: string
  image?: string
  video?: string
  videoMobile?: string
  content?: string | React.ReactNode
  content2?: string | React.ReactNode
  color?: string
  images?: string[]
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
