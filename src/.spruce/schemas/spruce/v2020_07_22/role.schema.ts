import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const roleSchema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema  = {
	id: 'role',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Role',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	description: 'Every role in Spruce inherits from 5 bases. Anon, Logged in (person not associated with any org), Org Owner, Group Manager, Manager, Teammate, and Guest.',
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
	            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
	            'base': {
	                label: 'Base',
	                type: 'select',
	                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
	                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
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
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** Public. Should I let people that are not part of this organization this role? */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                hint: 'Should I let people that are not part of this organization this role?',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(roleSchema)

export default roleSchema
