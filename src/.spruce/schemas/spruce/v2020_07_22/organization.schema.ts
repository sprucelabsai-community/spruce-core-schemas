import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const organizationSchema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema  = {
	id: 'organization',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Organization',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	description: 'A company or team. Comprises of many people and locations.',
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
	            /** Address. */
	            'address': {
	                label: 'Address',
	                type: 'address',
	                options: undefined
	            },
	            /** Slug. */
	            'slug': {
	                label: 'Slug',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Public. Is this organization viewable by guests? */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                hint: 'Is this organization viewable by guests?',
	                defaultValue: false,
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(organizationSchema)

export default organizationSchema
