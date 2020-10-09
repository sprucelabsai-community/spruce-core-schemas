
import { SpruceSchemas } from '../../core.schemas.types'



const personOrganizationSchema: SpruceSchemas.Spruce.v2020_07_22.IPersonOrganizationSchema  = {
	id: 'personOrganization',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Person <-> organization relationship',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'roleIds': {
	                label: 'Name',
	                type: 'id',
	                isRequired: true,
	                isArray: true,
	                options: undefined
	            },
	            /** Organization. */
	            'organizationId': {
	                label: 'Organization',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Person. */
	            'personId': {
	                label: 'Person',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}



export default personOrganizationSchema
