import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import product from './product'
import productVariant from './product-variant'
import productionWork from './production-work'
import project from './project'
import release from './release'

export const schemaTypes = [
  artist,
  release,
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
    product,
    productVariant,
    productionWork,
    blockContent,
    project,
  ],
}
