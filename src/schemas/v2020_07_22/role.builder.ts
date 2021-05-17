import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'role',
	name: 'Role',
	description:
		'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest.',
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
			label: 'Base',
			type: 'select',
			hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
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
		organizationId: {
			type: 'id',
		},
		isPublic: {
			type: 'boolean',
			label: 'Public',
			hint: 'Should I let people that are not part of this organization this role?',
		},
	},
})
