import { buildSchema } from '@sprucelabs/schema'

const feedItemSchema = buildSchema({
	id: 'feedItem',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
		},
		isMe: {
			type: 'boolean',
		},
		message: {
			type: 'text',
			isRequired: true,
		},
		dateCreated: {
			type: 'dateTime',
			isRequired: true,
		},
		note: {
			type: 'text',
		},
		isSprucebot: {
			type: 'boolean',
		},
		source: {
			type: 'raw',
			options: {
				valueType: 'Record<string, any>',
			},
		},
		fromCasualName: {
			type: 'text',
			isRequired: true,
		},
		avatar: {
			type: 'image',
			options: {
				requiredSizes: ['*'],
			},
		},
	},
})

export default buildSchema({
	id: 'feed',
	fields: {
		items: {
			type: 'schema',
			isArray: true,
			isRequired: true,
			minArrayLength: 0,
			options: {
				schema: feedItemSchema,
			},
		},
		shouldEnableChat: { type: 'boolean' },
	},
})
