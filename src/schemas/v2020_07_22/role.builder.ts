import { buildSchema } from '@sprucelabs/schema'
import { ROLE_CHOICES } from '../../constants'

export default buildSchema({
	id: 'role',
	name: 'Role',
	description:
		'Every role in Spruce inherits from 5 bases. Anon, Logged in (person not associated with any org), Org Owner, Group Manager, Manager, Teammate, and Guest.',
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
				choices: ROLE_CHOICES,
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
