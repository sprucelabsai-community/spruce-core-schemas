import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'

import agentSourceSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/agentSource.schema'

const agentSchema: SpruceSchemas.Spruce.v2020_07_22.AgentSchema  = {
	id: 'agent',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Agent',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'name': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'systemPrompt': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'source': {
	                type: 'schema',
	                options: {schema: agentSourceSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(agentSchema)

export default agentSchema
