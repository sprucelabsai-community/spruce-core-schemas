import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'

import profileImageSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/profileImage.schema'

const personSchema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema  = {
	id: 'person',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Person',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	description: 'A human being.',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** First name. */
	            'firstName': {
	                label: 'First name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Last name. */
	            'lastName': {
	                label: 'Last name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Casual name. The name you can use when talking to this person. */
	            'casualName': {
	                label: 'Casual name',
	                type: 'text',
	                isRequired: true,
	                hint: 'The name you can use when talking to this person.',
	                options: undefined
	            },
	            /** Phone. A number that can be texted */
	            'phone': {
	                label: 'Phone',
	                type: 'phone',
	                isPrivate: true,
	                hint: 'A number that can be texted',
	                options: undefined
	            },
	            /** Profile photos. */
	            'profileImages': {
	                label: 'Profile photos',
	                type: 'schema',
	                options: {schema: profileImageSchema_v2020_07_22,}
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateScrambled': {
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(personSchema)

export default personSchema
