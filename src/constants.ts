export const EMPLOYED_BASE_ROLES = [
    { name: 'Owner', slug: 'owner' },
    { name: 'Group manager', slug: 'groupManager' },
    { name: 'Manager', slug: 'manager' },
    { name: 'Teammate', slug: 'teammate' },
] as const
export const GUEST_BASE_ROLES = [{ name: 'Guest', slug: 'guest' }] as const

export const META_BASE_ROLES = [
    { name: 'Anonymous', slug: 'anonymous' },
    { name: 'Logged in', slug: 'loggedIn' },
] as const

export const BASE_ROLES = [...EMPLOYED_BASE_ROLES, ...GUEST_BASE_ROLES] as const

export const BASE_ROLES_WITH_META = [
    ...EMPLOYED_BASE_ROLES,
    ...GUEST_BASE_ROLES,
    ...META_BASE_ROLES,
]

export const EMPLOYED_BASE_ROLE_CHOICES = [
    { label: 'Owner', value: 'owner' },
    { label: 'Group manager', value: 'groupManager' },
    { label: 'Manager', value: 'manager' },
    { label: 'Teammate', value: 'teammate' },
] as const

export const GUEST_BASE_ROLE_CHOICES = [
    { label: 'Guest', value: 'guest' },
] as const

export const META_BASE_ROLE_CHOICES = [
    { label: 'Anonymous', value: 'anonymous' },
    { label: 'Logged in', value: 'loggedIn' },
] as const

export const BASE_ROLE_CHOICES = [
    ...EMPLOYED_BASE_ROLE_CHOICES,
    ...GUEST_BASE_ROLE_CHOICES,
] as const

export const BASE_ROLE_CHOICES_WITH_META = [
    ...EMPLOYED_BASE_ROLE_CHOICES,
    ...META_BASE_ROLE_CHOICES,
    ...GUEST_BASE_ROLE_CHOICES,
] as const
