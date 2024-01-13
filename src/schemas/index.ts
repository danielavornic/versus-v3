import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import productionWork from './production-work'
import project from './project'
import release from './release'

export const schemaTypes = [
  artist,
  release,
  project,
  productionWork,
  blockContent,
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artist, release, productionWork, blockContent, project],
}
