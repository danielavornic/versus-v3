import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import post from './post'
import product from './product'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, product, artist],
}
