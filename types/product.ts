import { Product } from '~/lib/sanity.queries'

export enum ProductSize {
  S = 's',
  M = 'm',
  L = 'l',
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
}
