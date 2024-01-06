import { SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import blockContent from './blockContent'
import project from './project'
import release from './release'

export const schemaTypes = [artist, release, project, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artist, release, blockContent, project],
}
