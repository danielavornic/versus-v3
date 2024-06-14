import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import product from './product'
import productVariant from './product-variant'
import productionWork from './production-work'
import release from './release'

export const schemaTypes = [
  artist,
  release,
  product,
  productionWork,
  productVariant,
  blockContent,
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artist,
    release,
    productionWork,
    productVariant,
    product,
    blockContent,
  ],
}
