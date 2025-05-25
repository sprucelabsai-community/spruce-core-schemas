import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const choiceSchema: SpruceSchemas.Spruce.v2020_07_22.ChoiceSchema  = {
	id: 'choice',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . */
	            'value': {
	                type: 'raw',
	                isRequired: true,
	                options: {valueType: `string | number`,}
	            },
	            /** . */
	            'label': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(choiceSchema)

export default choiceSchema
