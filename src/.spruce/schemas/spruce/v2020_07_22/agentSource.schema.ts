import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const agentSourceSchema: SpruceSchemas.Spruce.v2020_07_22.AgentSourceSchema  = {
	id: 'agentSource',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'skillId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(agentSourceSchema)

export default agentSourceSchema
