import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import release from './release'

export const schemaTypes = [artist, release, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artist, release, blockContent],
}
