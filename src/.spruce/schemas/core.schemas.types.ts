/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface SkillCreator {
		
			
			'skillId'?: string| undefined | null
			
			'personId'?: string| undefined | null
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
			'description'?: string| undefined | null
			/** Namespace. */
			'slug': string
			/** Creators. The people or skills who created and own this skill. */
			'creators': SpruceSchemas.Spruce.v2020_07_22.SkillCreator[]
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			/** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
			'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest")| undefined | null
			/** Description. */
			'description'?: string| undefined | null
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
			
			'organizationId'?: string| undefined | null
			/** Public. Should I let people that are not part of this organization this role? */
			'isPublic'?: boolean| undefined | null
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
		            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
		            'base': {
		                label: 'Base',
		                type: 'select',
		                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
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
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			'firstName'?: string| undefined | null
			/** Last name. */
			'lastName'?: string| undefined | null
			/** Casual name. The name you can use when talking to this person. */
			'casualName': string
			/** Phone. A number that can be texted */
			'phone'?: string| undefined | null
			/** Avatar src. */
			'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateScrambled'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
		            /** Phone. A number that can be texted */
		            'phone': {
		                label: 'Phone',
		                type: 'phone',
		                isPrivate: true,
		                hint: 'A number that can be texted',
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
			'address'?: SpruceSchema.AddressFieldValue| undefined | null
			/** Slug. */
			'slug': string
			/** Public. Is this organization viewable by guests? */
			'isPublic'?: boolean| undefined | null
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
		
			
			'locationId'?: string| undefined | null
			
			'personId'?: string| undefined | null
			
			'organizationId'?: string| undefined | null
			
			'skillId'?: string| undefined | null
			
			'roleId'?: string| undefined | null
			
			'isCore'?: boolean| undefined | null
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
		
			
			'locationId'?: string| undefined | null
			
			'personId'?: string| undefined | null
			
			'organizationId'?: string| undefined | null
			
			'skillId'?: string| undefined | null
			
			'roleId'?: string| undefined | null
			
			'phone'?: string| undefined | null
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

	
	export interface SendMessage {
		
			
			'dateSent'?: number| undefined | null
			
			'target': SpruceSchemas.Spruce.v2020_07_22.MessageTarget
			
			'errors'?: string[]| undefined | null
			
			'classification': ("auth" | "transactional" | "promotional" | "incoming")
			
			'status'?: ("pending" | "processing" | "sent" | "failed" | "ignored")| undefined | null
			
			'body': string
			
			'context'?: (Record<string, any>)| undefined | null
			
			'topicId'?: string| undefined | null
			
			'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[]| undefined | null
	}

	export interface SendMessageSchema extends SpruceSchema.Schema {
		id: 'sendMessage',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
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

	/** A discrete communication between two humans or a human and a machine. */
	export interface Message {
		
			
			'id': string
			
			'dateCreated': number
			
			'dateSent'?: number| undefined | null
			
			'target': SpruceSchemas.Spruce.v2020_07_22.MessageTarget
			
			'source': SpruceSchemas.Spruce.v2020_07_22.MessageSource
			
			'errors'?: string[]| undefined | null
			
			'classification': ("auth" | "transactional" | "promotional" | "incoming")
			
			'status'?: ("pending" | "processing" | "sent" | "failed" | "ignored")| undefined | null
			
			'body': string
			
			'context'?: (Record<string, any>)| undefined | null
			
			'topicId'?: string| undefined | null
			
			'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[]| undefined | null
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
			/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			'num'?: string| undefined | null
			/** Slug. */
			'slug': string
			/** Public. Is this location viewable by guests? */
			'isPublic'?: boolean| undefined | null
			/** Main Phone. */
			'phone'?: string| undefined | null
			/** Timezone. */
			'timezone'?: ("Etc/GMT+12" | "Pacific/Midway" | "Pacific/Honolulu" | "US/Alaska" | "America/Los_Angeles" | "America/Tijuana" | "US/Arizona" | "America/Chihuahua" | "US/Mountain" | "America/Managua" | "US/Central" | "America/Mexico_City" | "Canada/Saskatchewan" | "America/Bogota" | "US/Eastern" | "US/East-Indiana" | "Canada/Atlantic" | "America/Caracas" | "America/Manaus" | "America/Santiago" | "Canada/Newfoundland" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "America/Godthab" | "America/Montevideo" | "America/Noronha" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "Africa/Casablanca" | "Etc/Greenwich" | "Europe/Amsterdam" | "Europe/Belgrade" | "Europe/Brussels" | "Europe/Sarajevo" | "Africa/Lagos" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Africa/Cairo" | "Africa/Harare" | "Europe/Helsinki" | "Asia/Jerusalem" | "Europe/Minsk" | "Africa/Windhoek" | "Asia/Kuwait" | "Europe/Moscow" | "Africa/Nairobi" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Muscat" | "Asia/Baku" | "Asia/Yerevan" | "Asia/Kabul" | "Asia/Yekaterinburg" | "Asia/Karachi" | "Asia/Calcutta" | "Asia/Calcutta" | "Asia/Katmandu" | "Asia/Almaty" | "Asia/Dhaka" | "Asia/Rangoon" | "Asia/Bangkok" | "Asia/Krasnoyarsk" | "Asia/Hong_Kong" | "Asia/Kuala_Lumpur" | "Asia/Irkutsk" | "Australia/Perth" | "Asia/Taipei" | "Asia/Tokyo" | "Asia/Seoul" | "Asia/Yakutsk" | "Australia/Adelaide" | "Australia/Darwin" | "Australia/Brisbane" | "Australia/Canberra" | "Australia/Hobart" | "Pacific/Guam" | "Asia/Vladivostok" | "Asia/Magadan" | "Pacific/Auckland" | "Pacific/Fiji" | "Pacific/Tongatapu")| undefined | null
			/** Address. */
			'address': SpruceSchema.AddressFieldValue
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
			
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
		            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
		            'num': {
		                label: 'Store number',
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
		                options: {choices: [{"label":"International Date Line West","value":"Etc/GMT+12"},{"label":"Midway Island, Samoa","value":"Pacific/Midway"},{"label":"Hawaii","value":"Pacific/Honolulu"},{"label":"Alaska","value":"US/Alaska"},{"label":"Pacific Time (US & Canada)","value":"America/Los_Angeles"},{"label":"Tijuana, Baja California","value":"America/Tijuana"},{"label":"Arizona","value":"US/Arizona"},{"label":"Chihuahua, La Paz, Mazatlan","value":"America/Chihuahua"},{"label":"Mountain Time (US & Canada)","value":"US/Mountain"},{"label":"Central America","value":"America/Managua"},{"label":"Central Time (US & Canada)","value":"US/Central"},{"label":"Guadalajara, Mexico City, Monterrey","value":"America/Mexico_City"},{"label":"Saskatchewan","value":"Canada/Saskatchewan"},{"label":"Bogota, Lima, Quito, Rio Branco","value":"America/Bogota"},{"label":"Eastern Time (US & Canada)","value":"US/Eastern"},{"label":"Indiana (East)","value":"US/East-Indiana"},{"label":"Atlantic Time (Canada)","value":"Canada/Atlantic"},{"label":"Caracas, La Paz","value":"America/Caracas"},{"label":"Manaus","value":"America/Manaus"},{"label":"Santiago","value":"America/Santiago"},{"label":"Newfoundland","value":"Canada/Newfoundland"},{"label":"Brasilia","value":"America/Sao_Paulo"},{"label":"Buenos Aires, Georgetown","value":"America/Argentina/Buenos_Aires"},{"label":"Greenland","value":"America/Godthab"},{"label":"Montevideo","value":"America/Montevideo"},{"label":"Mid-Atlantic","value":"America/Noronha"},{"label":"Cape Verde Is.","value":"Atlantic/Cape_Verde"},{"label":"Azores","value":"Atlantic/Azores"},{"label":"Casablanca, Monrovia, Reykjavik","value":"Africa/Casablanca"},{"label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London","value":"Etc/Greenwich"},{"label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","value":"Europe/Amsterdam"},{"label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","value":"Europe/Belgrade"},{"label":"Brussels, Copenhagen, Madrid, Paris","value":"Europe/Brussels"},{"label":"Sarajevo, Skopje, Warsaw, Zagreb","value":"Europe/Sarajevo"},{"label":"West Central Africa","value":"Africa/Lagos"},{"label":"Amman","value":"Asia/Amman"},{"label":"Athens, Bucharest, Istanbul","value":"Europe/Athens"},{"label":"Beirut","value":"Asia/Beirut"},{"label":"Cairo","value":"Africa/Cairo"},{"label":"Harare, Pretoria","value":"Africa/Harare"},{"label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","value":"Europe/Helsinki"},{"label":"Jerusalem","value":"Asia/Jerusalem"},{"label":"Minsk","value":"Europe/Minsk"},{"label":"Windhoek","value":"Africa/Windhoek"},{"label":"Kuwait, Riyadh, Baghdad","value":"Asia/Kuwait"},{"label":"Moscow, St. Petersburg, Volgograd","value":"Europe/Moscow"},{"label":"Nairobi","value":"Africa/Nairobi"},{"label":"Tbilisi","value":"Asia/Tbilisi"},{"label":"Tehran","value":"Asia/Tehran"},{"label":"Abu Dhabi, Muscat","value":"Asia/Muscat"},{"label":"Baku","value":"Asia/Baku"},{"label":"Yerevan","value":"Asia/Yerevan"},{"label":"Kabul","value":"Asia/Kabul"},{"label":"Yekaterinburg","value":"Asia/Yekaterinburg"},{"label":"Islamabad, Karachi, Tashkent","value":"Asia/Karachi"},{"label":"Chennai, Kolkata, Mumbai, New Delhi","value":"Asia/Calcutta"},{"label":"Sri Jayawardenapura","value":"Asia/Calcutta"},{"label":"Kathmandu","value":"Asia/Katmandu"},{"label":"Almaty, Novosibirsk","value":"Asia/Almaty"},{"label":"Astana, Dhaka","value":"Asia/Dhaka"},{"label":"Yangon (Rangoon)","value":"Asia/Rangoon"},{"label":"Bangkok, Hanoi, Jakarta","value":"Asia/Bangkok"},{"label":"Krasnoyarsk","value":"Asia/Krasnoyarsk"},{"label":"Beijing, Chongqing, Hong Kong, Urumqi","value":"Asia/Hong_Kong"},{"label":"Kuala Lumpur, Singapore","value":"Asia/Kuala_Lumpur"},{"label":"Irkutsk, Ulaan Bataar","value":"Asia/Irkutsk"},{"label":"Perth","value":"Australia/Perth"},{"label":"Taipei","value":"Asia/Taipei"},{"label":"Osaka, Sapporo, Tokyo","value":"Asia/Tokyo"},{"label":"Seoul","value":"Asia/Seoul"},{"label":"Yakutsk","value":"Asia/Yakutsk"},{"label":"Adelaide","value":"Australia/Adelaide"},{"label":"Darwin","value":"Australia/Darwin"},{"label":"Brisbane","value":"Australia/Brisbane"},{"label":"Canberra, Melbourne, Sydney","value":"Australia/Canberra"},{"label":"Hobart","value":"Australia/Hobart"},{"label":"Guam, Port Moresby","value":"Pacific/Guam"},{"label":"Vladivostok","value":"Asia/Vladivostok"},{"label":"Magadan, Solomon Is., New Caledonia","value":"Asia/Magadan"},{"label":"Auckland, Wellington","value":"Pacific/Auckland"},{"label":"Fiji, Kamchatka, Marshall Is.","value":"Pacific/Fiji"},{"label":"Nuku'alofa","value":"Pacific/Tongatapu"}],}
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
			
			'shouldEnableChat'?: boolean| undefined | null
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
		            /** . */
		            'shouldEnableChat': {
		                type: 'boolean',
		                options: undefined
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

	
	export interface FeedItem {
		
			
			'id': string
			
			'isMe'?: boolean| undefined | null
			
			'message': string
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'note'?: string| undefined | null
			
			'isSprucebot'?: boolean| undefined | null
			
			'source'?: (Record<string, any>)| undefined | null
			
			'fromCasualName': string
			
			'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[]| undefined | null
			
			'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
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
		            'isMe': {
		                type: 'boolean',
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
		            'isSprucebot': {
		                type: 'boolean',
		                options: undefined
		            },
		            /** . */
		            'source': {
		                type: 'raw',
		                options: {valueType: `Record<string, any>`,}
		            },
		            /** . */
		            'fromCasualName': {
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
		    }
	}

	export type FeedItemEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.FeedItemSchema>

}




