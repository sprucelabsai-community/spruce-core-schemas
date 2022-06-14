import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'skill',
	name: 'Skill',
	description: 'An ability Sprucebot has learned.',
	fields: {
		id: {
			label: 'Id',
			type: 'id',
			isRequired: true,
		},
		apiKey: {
			label: 'Id',
			isPrivate: true,
			type: 'id',
			isRequired: true,
		},
		name: {
			label: 'Name',
			type: 'text',
			isRequired: true,
		},
		description: {
			label: 'Description',
			type: 'text',
			isRequired: false,
		},
		slug: {
			label: 'Namespace',
			type: 'text',
			isRequired: true,
		},
		isPublic: {
			type: 'boolean',
			label: 'Public',
		},
		creators: {
			label: 'Creators',
			type: 'schema',
			hint: 'The people or skills who created and own this skill.',
			isRequired: true,
			isArray: true,
			isPrivate: true,
			options: {
				schema: {
					id: 'skillCreator',
					name: 'Skill creator',
					fields: {
						skillId: {
							type: 'text',
						},
						personId: {
							type: 'text',
						},
					},
				},
			},
		},
		dateCreated: {
			type: 'dateTime',
			isRequired: true,
		},
		dateDeleted: {
			type: 'dateTime',
		},
	},
})
