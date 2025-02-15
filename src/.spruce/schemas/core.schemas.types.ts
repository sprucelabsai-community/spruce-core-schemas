import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





















export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface SkillCreator {
		
			
			'skillId'?: string | undefined | null
			
			'personId'?: string | undefined | null
	}

	export interface SkillCreatorSchema extends SpruceSchema.Schema {
		id: 'skillCreator',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Skill creator',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'skillId': {
		                type: 'text',
		                options: undefined
		            },
		            /** . */
		            'personId': {
		                type: 'text',
		                options: undefined
		            },
		    }
	}

	export type SkillCreatorEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.SkillCreatorSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** An ability Sprucebot has learned. */
	export interface Skill {
		
			/** Id. */
			'id': string
			/** Id. */
			'apiKey': string
			/** Name. */
			'name': string
			/** Description. */
			'description'?: string | undefined | null
			/** Namespace. */
			'slug': string
			/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
			'isPublished'?: boolean | undefined | null
			/** Global. Does this skill require needing to be installed anywhere. */
			'canBeInstalled'?: boolean | undefined | null
			/** Creators. The people or skills who created and own this skill. */
			'creators': SpruceSchemas.Spruce.v2020_07_22.SkillCreator[]
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
	}

	export interface SkillSchema extends SpruceSchema.Schema {
		id: 'skill',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Skill',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'An ability Sprucebot has learned.',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Id. */
		            'apiKey': {
		                label: 'Id',
		                type: 'id',
		                isPrivate: true,
		                isRequired: true,
		                options: undefined
		            },
		            /** Name. */
		            'name': {
		                label: 'Name',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Description. */
		            'description': {
		                label: 'Description',
		                type: 'text',
		                options: undefined
		            },
		            /** Namespace. */
		            'slug': {
		                label: 'Namespace',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
		            'isPublished': {
		                label: 'Published',
		                type: 'boolean',
		                hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
		                options: undefined
		            },
		            /** Global. Does this skill require needing to be installed anywhere. */
		            'canBeInstalled': {
		                label: 'Global',
		                type: 'boolean',
		                hint: 'Does this skill require needing to be installed anywhere.',
		                defaultValue: true,
		                options: undefined
		            },
		            /** Creators. The people or skills who created and own this skill. */
		            'creators': {
		                label: 'Creators',
		                type: 'schema',
		                isPrivate: true,
		                isRequired: true,
		                hint: 'The people or skills who created and own this skill.',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillCreatorSchema,}
		            },
		            /** . */
		            'dateCreated': {
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'dateTime',
		                options: undefined
		            },
		    }
	}

	export type SkillEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.SkillSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** Every role in Spruce inherits from 5 bases. Anon, Logged in (person not associated with any org), Org Owner, Group Manager, Manager, Teammate, and Guest. */
	export interface Role {
		
			/** Id. */
			'id': string
			/** Name. */
			'name': string
			/** Base. A best practices starting point for a role based on the generalized roles at a company. */
			'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest") | undefined | null
			/** Description. */
			'description'?: string | undefined | null
			
			'dateCreated': number
			
			'dateDeleted'?: number | undefined | null
			
			'organizationId'?: string | undefined | null
			/** Public. Should I let people that are not part of this organization this role? */
			'isPublic'?: boolean | undefined | null
	}

	export interface RoleSchema extends SpruceSchema.Schema {
		id: 'role',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Role',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'Every role in Spruce inherits from 5 bases. Anon, Logged in (person not associated with any org), Org Owner, Group Manager, Manager, Teammate, and Guest.',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Name. */
		            'name': {
		                label: 'Name',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Base. A best practices starting point for a role based on the generalized roles at a company. */
		            'base': {
		                label: 'Base',
		                type: 'select',
		                hint: 'A best practices starting point for a role based on the generalized roles at a company.',
		                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
		            },
		            /** Description. */
		            'description': {
		                label: 'Description',
		                type: 'text',
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'number',
		                options: undefined
		            },
		            /** . */
		            'organizationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** Public. Should I let people that are not part of this organization this role? */
		            'isPublic': {
		                label: 'Public',
		                type: 'boolean',
		                hint: 'Should I let people that are not part of this organization this role?',
		                options: undefined
		            },
		    }
	}

	export type RoleEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.RoleSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface PersonOrganization {
		
			/** Id. */
			'id': string
			/** Organization id. */
			'organizationId': string
			/** Person id. */
			'personId': string
			/** Date created. */
			'dateCreated': SpruceSchema.DateTimeFieldValue
			/** Date deleted. */
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
	}

	export interface PersonOrganizationSchema extends SpruceSchema.Schema {
		id: 'personOrganization',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Person <-> organization relationship',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Organization id. */
		            'organizationId': {
		                label: 'Organization id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Person id. */
		            'personId': {
		                label: 'Person id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date created. */
		            'dateCreated': {
		                label: 'Date created',
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date deleted. */
		            'dateDeleted': {
		                label: 'Date deleted',
		                type: 'dateTime',
		                options: undefined
		            },
		    }
	}

	export type PersonOrganizationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.PersonOrganizationSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface PersonLocation {
		
			/** Id. */
			'id': string
			/** Location id. */
			'locationId': string
			/** Person id. */
			'personId': string
			/** Date created. */
			'dateCreated': SpruceSchema.DateTimeFieldValue
			/** Date deleted. */
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
	}

	export interface PersonLocationSchema extends SpruceSchema.Schema {
		id: 'personLocation',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Person <-> location relationship',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Location id. */
		            'locationId': {
		                label: 'Location id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Person id. */
		            'personId': {
		                label: 'Person id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date created. */
		            'dateCreated': {
		                label: 'Date created',
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date deleted. */
		            'dateDeleted': {
		                label: 'Date deleted',
		                type: 'dateTime',
		                options: undefined
		            },
		    }
	}

	export type PersonLocationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.PersonLocationSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A human being. */
	export interface Person {
		
			/** Id. */
			'id': string
			/** First name. */
			'firstName'?: string | undefined | null
			/** Last name. */
			'lastName'?: string | undefined | null
			/** Casual name. The name you can use when talking to this person. */
			'casualName': string
			/** Timezone. */
			'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
			/** Phone. A number that can be texted */
			'phone'?: string | undefined | null
			/** Username. An optional username if the person does not want to login using their phone */
			'username'?: string | undefined | null
			/** Avatar src. */
			'avatar'?: SpruceSchema.ImageFieldValue | undefined | null
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateUpdated'?: SpruceSchema.DateTimeFieldValue | undefined | null
			
			'dateScrambled'?: SpruceSchema.DateTimeFieldValue | undefined | null
	}

	export interface PersonSchema extends SpruceSchema.Schema {
		id: 'person',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Person',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'A human being.',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** First name. */
		            'firstName': {
		                label: 'First name',
		                type: 'text',
		                isPrivate: true,
		                options: undefined
		            },
		            /** Last name. */
		            'lastName': {
		                label: 'Last name',
		                type: 'text',
		                isPrivate: true,
		                options: undefined
		            },
		            /** Casual name. The name you can use when talking to this person. */
		            'casualName': {
		                label: 'Casual name',
		                type: 'text',
		                isRequired: true,
		                hint: 'The name you can use when talking to this person.',
		                options: undefined
		            },
		            /** Timezone. */
		            'timezone': {
		                label: 'Timezone',
		                type: 'select',
		                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
		            },
		            /** Phone. A number that can be texted */
		            'phone': {
		                label: 'Phone',
		                type: 'phone',
		                isPrivate: true,
		                hint: 'A number that can be texted',
		                options: undefined
		            },
		            /** Username. An optional username if the person does not want to login using their phone */
		            'username': {
		                label: 'Username',
		                type: 'text',
		                isPrivate: true,
		                hint: 'An optional username if the person does not want to login using their phone',
		                options: undefined
		            },
		            /** Avatar src. */
		            'avatar': {
		                label: 'Avatar src',
		                type: 'image',
		                options: {requiredSizes: ["*"],}
		            },
		            /** . */
		            'dateCreated': {
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateUpdated': {
		                type: 'dateTime',
		                options: undefined
		            },
		            /** . */
		            'dateScrambled': {
		                type: 'dateTime',
		                options: undefined
		            },
		    }
	}

	export type PersonEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.PersonSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A company or team. Comprises of many people and locations. */
	export interface Organization {
		
			/** Id. */
			'id': string
			/** Name. */
			'name': string
			/** Address. */
			'address'?: SpruceSchema.AddressFieldValue | undefined | null
			/** Slug. */
			'slug': string
			/** Public. Is this organization viewable by guests? */
			'isPublic'?: boolean | undefined | null
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
	}

	export interface OrganizationSchema extends SpruceSchema.Schema {
		id: 'organization',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Organization',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'A company or team. Comprises of many people and locations.',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Name. */
		            'name': {
		                label: 'Name',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Address. */
		            'address': {
		                label: 'Address',
		                type: 'address',
		                options: undefined
		            },
		            /** Slug. */
		            'slug': {
		                label: 'Slug',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Public. Is this organization viewable by guests? */
		            'isPublic': {
		                label: 'Public',
		                type: 'boolean',
		                hint: 'Is this organization viewable by guests?',
		                defaultValue: false,
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'dateTime',
		                options: undefined
		            },
		    }
	}

	export type OrganizationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface MessageSource {
		
			
			'locationId'?: string | undefined | null
			
			'personId'?: string | undefined | null
			
			'organizationId'?: string | undefined | null
			
			'skillId'?: string | undefined | null
			
			'roleId'?: string | undefined | null
			
			'isCore'?: boolean | undefined | null
	}

	export interface MessageSourceSchema extends SpruceSchema.Schema {
		id: 'messageSource',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'locationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'personId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'organizationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'skillId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'roleId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'isCore': {
		                type: 'boolean',
		                options: undefined
		            },
		    }
	}

	export type MessageSourceEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.MessageSourceSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface MessageTarget {
		
			
			'locationId'?: string | undefined | null
			
			'personId'?: string | undefined | null
			
			'organizationId'?: string | undefined | null
			
			'skillId'?: string | undefined | null
			
			'roleId'?: string | undefined | null
			
			'phone'?: string | undefined | null
	}

	export interface MessageTargetSchema extends SpruceSchema.Schema {
		id: 'messageTarget',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'locationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'personId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'organizationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'skillId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'roleId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'phone': {
		                type: 'phone',
		                options: undefined
		            },
		    }
	}

	export type MessageTargetEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A discrete communication between two humans or a human and a machine. */
	export interface Message {
		
			
			'id': string
			/** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
			'trackingId'?: string | undefined | null
			
			'dateCreated': number
			
			'dateSent'?: number | undefined | null
			
			'target': SpruceSchemas.Spruce.v2020_07_22.MessageTarget
			
			'source': SpruceSchemas.Spruce.v2020_07_22.MessageSource
			
			'errors'?: string[] | undefined | null
			
			'classification': ("auth" | "transactional" | "promotional" | "incoming")
			
			'status'?: ("pending" | "processing" | "sent" | "failed" | "ignored") | undefined | null
			
			'body': string
			
			'context'?: (Record<string, any>) | undefined | null
			
			'topicId'?: string | undefined | null
			
			'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[] | undefined | null
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[] | undefined | null
	}

	export interface MessageSchema extends SpruceSchema.Schema {
		id: 'message',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'A discrete communication between two humans or a human and a machine.',
		    fields: {
		            /** . */
		            'id': {
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
		            'trackingId': {
		                type: 'id',
		                hint: 'An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.',
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateSent': {
		                type: 'number',
		                options: undefined
		            },
		            /** . */
		            'target': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema,}
		            },
		            /** . */
		            'source': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSourceSchema,}
		            },
		            /** . */
		            'errors': {
		                type: 'text',
		                isPrivate: true,
		                isArray: true,
		                options: undefined
		            },
		            /** . */
		            'classification': {
		                type: 'select',
		                isRequired: true,
		                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
		            },
		            /** . */
		            'status': {
		                type: 'select',
		                isPrivate: true,
		                defaultValue: "pending",
		                options: {choices: [{"value":"pending","label":"Pending"},{"value":"processing","label":"Processing"},{"value":"sent","label":"Sent"},{"value":"failed","label":"Failed"},{"value":"ignored","label":"Ignored"}],}
		            },
		            /** . */
		            'body': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'context': {
		                type: 'raw',
		                isPrivate: true,
		                options: {valueType: `Record<string, any>`,}
		            },
		            /** . */
		            'topicId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'links': {
		                type: 'schema',
		                isArray: true,
		                minArrayLength: 0,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
		            },
		            /** . */
		            'choices': {
		                type: 'schema',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.ChoiceSchema,}
		            },
		    }
	}

	export type MessageEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.MessageSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A physical location where people meet. An organization has at least one of them. */
	export interface Location {
		
			/** Id. */
			'id': string
			/** Name. */
			'name': string
			/** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			'num'?: string | undefined | null
			/** Slug. */
			'slug': string
			/** Public. Is this location viewable by guests? */
			'isPublic'?: boolean | undefined | null
			/** Main Phone. */
			'phone'?: string | undefined | null
			/** Timezone. */
			'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
			/** Address. */
			'address': SpruceSchema.AddressFieldValue
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
			
			'dateUpdated'?: SpruceSchema.DateTimeFieldValue | undefined | null
			
			'organizationId': string
	}

	export interface LocationSchema extends SpruceSchema.Schema {
		id: 'location',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Location',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'A physical location where people meet. An organization has at least one of them.',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Name. */
		            'name': {
		                label: 'Name',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
		            'num': {
		                label: 'Location number',
		                type: 'text',
		                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
		                options: undefined
		            },
		            /** Slug. */
		            'slug': {
		                label: 'Slug',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** Public. Is this location viewable by guests? */
		            'isPublic': {
		                label: 'Public',
		                type: 'boolean',
		                hint: 'Is this location viewable by guests?',
		                defaultValue: false,
		                options: undefined
		            },
		            /** Main Phone. */
		            'phone': {
		                label: 'Main Phone',
		                type: 'phone',
		                options: undefined
		            },
		            /** Timezone. */
		            'timezone': {
		                label: 'Timezone',
		                type: 'select',
		                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
		            },
		            /** Address. */
		            'address': {
		                label: 'Address',
		                type: 'address',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'dateTime',
		                options: undefined
		            },
		            /** . */
		            'dateUpdated': {
		                type: 'dateTime',
		                options: undefined
		            },
		            /** . */
		            'organizationId': {
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type LocationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.LocationSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface Feed {
		
			
			'items': SpruceSchemas.Spruce.v2020_07_22.FeedItem[]
	}

	export interface FeedSchema extends SpruceSchema.Schema {
		id: 'feed',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'items': {
		                type: 'schema',
		                isRequired: true,
		                isArray: true,
		                minArrayLength: 0,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FeedItemSchema,}
		            },
		    }
	}

	export type FeedEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.FeedSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface Link {
		
			
			'label': string
			
			'uri': string
	}

	export interface LinkSchema extends SpruceSchema.Schema {
		id: 'link',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Link',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'label': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'uri': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type LinkEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.LinkSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface FeedItemTarget {
		
			
			'personId'?: string | undefined | null
			
			'casualName': string
			
			'avatar'?: SpruceSchema.ImageFieldValue | undefined | null
			
			'skillId'?: string | undefined | null
			
			'isMe': boolean
			
			'isSprucebot': boolean
	}

	export interface FeedItemTargetSchema extends SpruceSchema.Schema {
		id: 'feedItemTarget',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'personId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'casualName': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'avatar': {
		                type: 'image',
		                options: {requiredSizes: ["*"],}
		            },
		            /** . */
		            'skillId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'isMe': {
		                type: 'boolean',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'isSprucebot': {
		                type: 'boolean',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type FeedItemTargetEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.FeedItemTargetSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface Choice {
		
			
			'value': string
			
			'label': string
	}

	export interface ChoiceSchema extends SpruceSchema.Schema {
		id: 'choice',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'value': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'label': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type ChoiceEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.ChoiceSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface SendMessage {
		
			/** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
			'trackingId'?: string | undefined | null
			
			'dateSent'?: number | undefined | null
			
			'target': SpruceSchemas.Spruce.v2020_07_22.MessageTarget
			
			'errors'?: string[] | undefined | null
			
			'classification': ("auth" | "transactional" | "promotional" | "incoming")
			
			'status'?: ("pending" | "processing" | "sent" | "failed" | "ignored") | undefined | null
			
			'body': string
			
			'context'?: (Record<string, any>) | undefined | null
			
			'topicId'?: string | undefined | null
			
			'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[] | undefined | null
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[] | undefined | null
	}

	export interface SendMessageSchema extends SpruceSchema.Schema {
		id: 'sendMessage',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
		            'trackingId': {
		                type: 'id',
		                hint: 'An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.',
		                options: undefined
		            },
		            /** . */
		            'dateSent': {
		                type: 'number',
		                options: undefined
		            },
		            /** . */
		            'target': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema,}
		            },
		            /** . */
		            'errors': {
		                type: 'text',
		                isPrivate: true,
		                isArray: true,
		                options: undefined
		            },
		            /** . */
		            'classification': {
		                type: 'select',
		                isRequired: true,
		                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
		            },
		            /** . */
		            'status': {
		                type: 'select',
		                isPrivate: true,
		                defaultValue: "pending",
		                options: {choices: [{"value":"pending","label":"Pending"},{"value":"processing","label":"Processing"},{"value":"sent","label":"Sent"},{"value":"failed","label":"Failed"},{"value":"ignored","label":"Ignored"}],}
		            },
		            /** . */
		            'body': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'context': {
		                type: 'raw',
		                isPrivate: true,
		                options: {valueType: `Record<string, any>`,}
		            },
		            /** . */
		            'topicId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'links': {
		                type: 'schema',
		                isArray: true,
		                minArrayLength: 0,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
		            },
		            /** . */
		            'choices': {
		                type: 'schema',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.ChoiceSchema,}
		            },
		    }
	}

	export type SendMessageEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.SendMessageSchema>

}


export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface FeedItem {
		
			
			'id': string
			
			'message': string
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'note'?: string | undefined | null
			
			'source': SpruceSchemas.Spruce.v2020_07_22.FeedItemTarget
			
			'target': SpruceSchemas.Spruce.v2020_07_22.FeedItemTarget
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[] | undefined | null
			
			'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[] | undefined | null
			
			'context'?: (Record<string, any>) | undefined | null
	}

	export interface FeedItemSchema extends SpruceSchema.Schema {
		id: 'feedItem',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'id': {
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'message': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'note': {
		                type: 'text',
		                options: undefined
		            },
		            /** . */
		            'source': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FeedItemTargetSchema,}
		            },
		            /** . */
		            'target': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FeedItemTargetSchema,}
		            },
		            /** . */
		            'choices': {
		                type: 'schema',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.ChoiceSchema,}
		            },
		            /** . */
		            'links': {
		                type: 'schema',
		                isArray: true,
		                minArrayLength: 0,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
		            },
		            /** . */
		            'context': {
		                type: 'raw',
		                options: {valueType: `Record<string, any>`,}
		            },
		    }
	}

	export type FeedItemEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.FeedItemSchema>

}




