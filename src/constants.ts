export const EMPLOYED_BASE_ROLES = [
	{ name: 'Owner', slug: 'owner' },
	{ name: 'Group manager', slug: 'groupManager' },
	{ name: 'Manager', slug: 'manager' },
	{ name: 'Teammate', slug: 'teammate' },
]
export const GUEST_BASE_ROLES = [{ name: 'Guest', slug: 'guest' }]

const META_BASE_ROLES = [
	{ name: 'Anonymous', slug: 'anonymous' },
	{ name: 'Logged in', slug: 'loggedIn' },
]

const mapBaseToChoice = (br: {
	name: string
	slug: string
}): { label: string; value: string } => ({ label: br.name, value: br.slug })

export const EMPLOYED_BASE_ROLE_CHOICES = [
	...EMPLOYED_BASE_ROLES.map(mapBaseToChoice),
]

export const GUEST_ROLE_CHOICES = GUEST_BASE_ROLES.map(mapBaseToChoice)

export const META_BASE_ROLE_CHOICES = META_BASE_ROLES.map(mapBaseToChoice)

export const ROLE_CHOICES = [
	...EMPLOYED_BASE_ROLE_CHOICES,
	...META_BASE_ROLE_CHOICES,
	...GUEST_ROLE_CHOICES,
]
