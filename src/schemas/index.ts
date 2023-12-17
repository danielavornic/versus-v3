import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'

export const schemaTypes = [artist, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artist, blockContent],
}
