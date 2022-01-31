import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const personOrganizationSchema: SpruceSchemas.Spruce.v2020_07_22.PersonOrganizationSchema  = {
	id: 'personOrganization',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Person <-> organization relationship',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Organization id. */
	            'organizationId': {
	                label: 'Organization id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Person id. */
	            'personId': {
	                label: 'Person id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Date created. */
	            'dateCreated': {
	                label: 'Date created',
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** Date deleted. */
	            'dateDeleted': {
	                label: 'Date deleted',
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(personOrganizationSchema)

export default personOrganizationSchema
