import { buildSchema } from '@sprucelabs/schema'
import choiceBuilder from './choice.builder'
import linkBuilder from './link.builder'

const feedItemTargetSchema = buildSchema({
	id: 'feedItemTarget',
	fields: {
		personId: { type: 'id' },
		casualName: { type: 'text', isRequired: true },
		avatar: {
			type: 'image',
			options: { requiredSizes: ['*'] },
			isRequired: true,
		},
		skillId: { type: 'id' },
	},
})

const feedItemSchema = buildSchema({
	id: 'feedItem',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
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
		source: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: feedItemTargetSchema,
			},
		},
		target: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: feedItemTargetSchema,
			},
		},
		avatar: {
			type: 'image',
			options: {
				requiredSizes: ['*'],
			},
		},
		choices: {
			type: 'schema',
			isArray: true,
			options: {
				schemaId: choiceBuilder,
			},
		},
		links: {
			type: 'schema',
			isArray: true,
			minArrayLength: 0,
			options: {
				schema: linkBuilder,
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
	},
})
