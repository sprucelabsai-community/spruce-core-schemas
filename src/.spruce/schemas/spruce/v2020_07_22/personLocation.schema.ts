import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const personLocationSchema: SpruceSchemas.Spruce.v2020_07_22.IPersonLocationSchema  = {
	id: 'personLocation',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Person <-> location relationship',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Location id. */
	            'locationId': {
	                label: 'Location id',
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
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** Date deleted. */
	            'dateDeleted': {
	                label: 'Date deleted',
	                type: 'number',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(personLocationSchema)

export default personLocationSchema
