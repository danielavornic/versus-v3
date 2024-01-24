import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import cartItem from './cart-item'
import order from './order'
import product from './product'
import productVariant from './product-variant'
import productionWork from './production-work'
import project from './project'
import release from './release'

export const schemaTypes = [
  artist,
  release,
  cartItem,
  order,
  productVariant,
  product,
  project,
  productionWork,
  blockContent,
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artist,
    release,
    cartItem,
    order,
    product,
    productVariant,
    productionWork,
    blockContent,
    project,
  ],
}
