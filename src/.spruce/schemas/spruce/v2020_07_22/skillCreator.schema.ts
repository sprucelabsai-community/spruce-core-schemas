
import { SpruceSchemas } from '../../core.schemas.types'



const skillCreatorSchema: SpruceSchemas.Spruce.v2020_07_22.ISkillCreatorSchema  = {
	id: 'skillCreator',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Skill creator',
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



export default skillCreatorSchema
