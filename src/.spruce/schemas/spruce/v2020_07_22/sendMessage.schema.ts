import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'

import messageTargetSchema from '#spruce/schemas/spruce/v2020_07_22/messageTarget.schema'
import fullMessageChoicesSchema from '#spruce/schemas/spruce/v2020_07_22/fullMessageChoices.schema'

const sendMessageSchema: SpruceSchemas.Spruce.v2020_07_22.SendMessageSchema  = {
	id: 'sendMessage',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: '',
	    fields: {
	            /** . */
	            'dateSent': {
	                type: 'number',
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: messageTargetSchema,}
	            },
	            /** . */
	            'errors': {
	                type: 'text',
	                isPrivate: true,
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'classification': {
	                type: 'select',
	                isRequired: true,
	                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
	            },
	            /** . */
	            'status': {
	                type: 'select',
	                isPrivate: true,
	                defaultValue: "pending",
	                options: {choices: [{"value":"pending","label":"Pending"},{"value":"processing","label":"Processing"},{"value":"sent","label":"Sent"},{"value":"failed","label":"Failed"},{"value":"ignored","label":"Ignored"}],}
	            },
	            /** . */
	            'body': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'context': {
	                type: 'raw',
	                isPrivate: true,
	                options: {valueType: `Record<string, any>`,}
	            },
	            /** . */
	            'topicId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'choices': {
	                type: 'schema',
	                isArray: true,
	                options: {schema: fullMessageChoicesSchema,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageSchema)

export default sendMessageSchema
