
import { SpruceSchemas } from '../../core.schemas.types'



const roleSchema: SpruceSchemas.Spruce.v2020_07_22.IRoleSchema  = {
	id: 'role',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Role',
	description: 'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest. All permissions can have defaults tied to these bases that the role will fallback to unless overridden.',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Bale. */
	            'base': {
	                label: 'Bale',
	                type: 'select',
	                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Guest","value":"guest"},{"label":"Anonymous","value":"anonymous"}],}
	            },
	            /** Slug. */
	            'slug': {
	                label: 'Slug',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'number',
	                options: undefined
	            },
	    }
}



export default roleSchema
