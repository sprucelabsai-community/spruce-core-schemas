import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'role',
	name: 'Role',
	description:
		'Everyone in Spruce breaks into 5 roles. Owner, District/Regional Manager, Manager, Teammate, and Guest.',
	fields: {
		id: {
			label: 'Id',
			type: 'id',
			isRequired: true,
		},
		slug: {
			label: 'Slug',
			type: 'text',
			isRequired: true,
		},
		name: {
			label: 'Name',
			type: 'text',
			isRequired: true,
		},
		dateCreated: {
			type: 'number',
			isRequired: true,
		},
		dateDeleted: {
			type: 'number',
		},
	},
})
