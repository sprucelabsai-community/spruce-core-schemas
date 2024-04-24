import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const skillCreatorSchema: SpruceSchemas.Spruce.v2020_07_22.SkillCreatorSchema  = {
	id: 'skillCreator',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Skill creator',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . */
	            'skillId': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'personId': {
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(skillCreatorSchema)

export default skillCreatorSchema
