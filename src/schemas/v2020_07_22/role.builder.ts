import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'role',
	name: 'Role',
	description:
		'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest. All permissions can have defaults tied to these bases that the role will fallback to unless overridden.',
	fields: {
		id: {
			label: 'Id',
			type: 'id',
			isRequired: true,
		},
		name: {
			label: 'Name',
			type: 'text',
			isRequired: true,
		},
		base: {
			label: 'Bale',
			type: 'select',
			options: {
				choices: [
					{ label: 'Owner', value: 'owner' },
					{ label: 'Group manager', value: 'groupManager' },
					{ label: 'Manager', value: 'manager' },
					{ label: 'Teammate', value: 'teammate' },
					{ label: 'Guest', value: 'guest' },
					{ label: 'Anonymous', value: 'anonymous' },
				],
			},
		},
		slug: {
			label: 'Slug',
			type: 'text',
			isRequired: true,
		},
		description: {
			label: 'Description',
			type: 'text',
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
