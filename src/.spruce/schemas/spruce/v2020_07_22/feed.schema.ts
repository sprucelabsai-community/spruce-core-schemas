import { SchemaRegistry } from '@sprucelabs/schema'
import feedItemSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/feedItem.schema'
import { SpruceSchemas } from '../../core.schemas.types'

const feedSchema: SpruceSchemas.Spruce.v2020_07_22.FeedSchema = {
    id: 'feed',
    version: 'v2020_07_22',
    namespace: 'Spruce',
    name: '',
    moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
    fields: {
        /** . */
        items: {
            type: 'schema',
            isRequired: true,
            isArray: true,
            minArrayLength: 0,
            options: { schema: feedItemSchema_v2020_07_22 },
        },
    },
}

SchemaRegistry.getInstance().trackSchema(feedSchema)

export default feedSchema
