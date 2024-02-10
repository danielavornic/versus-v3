import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import productionWork from './production-work'
import release from './release'

export const schemaTypes = [artist, release, productionWork, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artist, release, productionWork, blockContent],
}
