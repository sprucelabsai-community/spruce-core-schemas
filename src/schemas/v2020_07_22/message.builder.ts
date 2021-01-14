import { buildSchema } from '@sprucelabs/schema'

const eventTargetFields = {
	locationId: {
		type: 'id',
	},
	personId: {
		type: 'id',
	},
	organizationId: {
		type: 'id',
	},
	skillId: {
		type: 'id',
	},
} as const

export const messageTargetSchema = buildSchema({
	id: 'messageTarget',
	fields: {
		...eventTargetFields,
		phone: {
			type: 'phone',
		},
	},
})

export const messageSourceSchema = buildSchema({
	id: 'messageSource',
	fields: {
		...eventTargetFields,
		isCore: {
			type: 'boolean',
		},
	},
})

export default buildSchema({
	id: 'message',
	description:
		'A discrete communication between two humans or a human and a machine.',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
		},
		dateCreated: {
			type: 'number',
			isRequired: true,
		},
		dateSent: {
			type: 'number',
		},
		target: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: messageTargetSchema,
			},
		},
		source: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: messageSourceSchema,
			},
		},
		errors: {
			type: 'text',
			isArray: true,
			isPrivate: true,
		},
		classification: {
			type: 'select',
			isRequired: true,
			options: {
				choices: [
					{
						value: 'auth',
						label: 'Auth',
					} as const,
					{
						value: 'transactional',
						label: 'transactional',
					} as const,
					{
						value: 'promotional',
						label: 'Promotional',
					} as const,
					{
						value: 'incoming',
						label: 'incoming',
					} as const,
				],
			},
		},
		status: {
			type: 'select',
			defaultValue: 'pending',
			isPrivate: true,
			options: {
				choices: [
					{
						value: 'pending',
						label: 'Pending',
					} as const,
					{
						value: 'processing',
						label: 'Processing',
					} as const,
					{
						value: 'sent',
						label: 'Sent',
					} as const,
					{
						value: 'failed',
						label: 'Failed',
					} as const,
				],
			},
		},
		body: {
			type: 'text',
			isRequired: true,
		},
		context: {
			type: 'raw',
			options: {
				valueType: 'Record<string, any>',
			},
			isPrivate: true,
		},
		topicId: {
			type: 'id',
		},
		choices: {
			type: 'schema',
			isArray: true,
			options: {
				schema: {
					id: 'fullMessageChoices',
					fields: {
						value: {
							type: 'text',
							isRequired: true,
						},
						label: {
							type: 'text',
							isRequired: true,
						},
					},
				},
			},
		},
	},
})
