import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const fullMessageChoicesSchema: SpruceSchemas.Spruce.v2020_07_22.FullMessageChoicesSchema  = {
	id: 'fullMessageChoices',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . */
	            'value': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'label': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(fullMessageChoicesSchema)

export default fullMessageChoicesSchema
