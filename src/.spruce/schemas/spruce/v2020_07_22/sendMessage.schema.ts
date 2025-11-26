import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'

import messageTargetSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/messageTarget.schema'
import linkSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/link.schema'
import choiceSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/choice.schema'

const sendMessageSchema: SpruceSchemas.Spruce.v2020_07_22.SendMessageSchema  = {
	id: 'sendMessage',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	    fields: {
	            /** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
	            'trackingId': {
	                type: 'id',
	                hint: 'An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.',
	                options: undefined
	            },
	            /** . If this message is a reply to another message, this is the id of that original message. */
	            'inReplyToMessageId': {
	                type: 'id',
	                hint: 'If this message is a reply to another message, this is the id of that original message.',
	                options: undefined
	            },
	            /** . */
	            'dateSent': {
	                type: 'number',
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: messageTargetSchema_v2020_07_22,}
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
	            'subject': {
	                type: 'text',
	                options: undefined
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
	            'links': {
	                type: 'schema',
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: linkSchema_v2020_07_22,}
	            },
	            /** . */
	            'choices': {
	                type: 'schema',
	                isArray: true,
	                options: {schema: choiceSchema_v2020_07_22,}
	            },
	            /** . An arbitrary log associated with the message. Is used for debugging purposes. */
	            'log': {
	                type: 'text',
	                hint: 'An arbitrary log associated with the message. Is used for debugging purposes.',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageSchema)

export default sendMessageSchema
