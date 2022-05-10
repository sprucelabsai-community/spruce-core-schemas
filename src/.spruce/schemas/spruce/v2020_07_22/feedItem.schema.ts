import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const feedItemSchema: SpruceSchemas.Spruce.v2020_07_22.FeedItemSchema  = {
	id: 'feedItem',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'isMe': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'message': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'note': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'isSprucebot': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'source': {
	                type: 'raw',
	                options: {valueType: `Record<string, any>`,}
	            },
	            /** . */
	            'fromCasualName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'avatar': {
	                type: 'image',
	                options: {requiredSizes: ["*"],}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(feedItemSchema)

export default feedItemSchema
