import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const linkSchema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema  = {
	id: 'link',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Link',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . */
	            'label': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'uri': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(linkSchema)

export default linkSchema
