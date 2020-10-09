/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A physical location where people meet. An organization has at least one of them. */
	export interface ILocation {
		
			/** Id. */
			'id'?: string| undefined | null
			/** Name. */
			'name': string
			/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			'num'?: string| undefined | null
			/** Public. Is this location viewable by guests? */
			'isPublic'?: boolean| undefined | null
			/** Main Phone. */
			'phone'?: string| undefined | null
			/** Timezone. */
			'timezone'?: ("etc/gmt+12" | "pacific/midway" | "pacific/honolulu" | "us/alaska" | "america/los_Angeles" | "america/tijuana" | "us/arizona" | "america/chihuahua" | "us/mountain" | "america/managua" | "us/central" | "america/mexico_City" | "Canada/Saskatchewan" | "america/bogota" | "us/eastern" | "us/east-indiana" | "Canada/atlantic" | "america/caracas" | "america/manaus" | "america/Santiago" | "Canada/Newfoundland" | "america/Sao_Paulo" | "america/argentina/buenos_Aires" | "america/godthab" | "america/montevideo" | "america/Noronha" | "atlantic/cape_Verde" | "atlantic/azores" | "africa/casablanca" | "etc/gmt" | "europe/amsterdam" | "europe/belgrade" | "europe/brussels" | "europe/Sarajevo" | "africa/lagos" | "asia/amman" | "europe/athens" | "asia/beirut" | "africa/cairo" | "africa/Harare" | "europe/Helsinki" | "asia/Jerusalem" | "europe/minsk" | "africa/Windhoek" | "asia/Kuwait" | "europe/moscow" | "africa/Nairobi" | "asia/tbilisi" | "asia/tehran" | "asia/muscat" | "asia/baku" | "asia/Yerevan" | "asia/Kabul" | "asia/Yekaterinburg" | "asia/Karachi" | "asia/calcutta" | "asia/calcutta" | "asia/Katmandu" | "asia/almaty" | "asia/Dhaka" | "asia/Rangoon" | "asia/bangkok" | "asia/Krasnoyarsk" | "asia/Hong_Kong" | "asia/Kuala_Lumpur" | "asia/Irkutsk" | "Australia/Perth" | "asia/taipei" | "asia/tokyo" | "asia/Seoul" | "asia/Yakutsk" | "Australia/adelaide" | "Australia/Darwin" | "Australia/brisbane" | "Australia/canberra" | "Australia/Hobart" | "pacific/guam" | "asia/Vladivostok" | "asia/magadan" | "pacific/auckland" | "pacific/Fiji" | "pacific/tongatapu")| undefined | null
			/** Address. */
			'address': SpruceSchema.IAddressFieldValue
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
	}

	export interface ILocationSchema extends SpruceSchema.ISchema {
		id: 'location',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Location',
		description: 'A physical location where people meet. An organization has at least one of them.',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
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
		                options: {choices: [{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}],}
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
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type LocationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.ILocationSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A company or team. Comprises of many people and locations. */
	export interface IOrganization {
		
			/** Id. */
			'id': string
			/** Name. */
			'name': string
			/** Slug. */
			'slug': string
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
	}

	export interface IOrganizationSchema extends SpruceSchema.ISchema {
		id: 'organization',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Organization',
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
		            /** Slug. */
		            'slug': {
		                label: 'Slug',
		                type: 'text',
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
		            'dateDeleted': {
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type OrganizationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.IOrganizationSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface IPersonOrganization {
		
			/** Id. */
			'id': string
			/** Name. */
			'roleIds': string[]
			/** Organization. */
			'organizationId': string
			/** Person. */
			'personId': string
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
	}

	export interface IPersonOrganizationSchema extends SpruceSchema.ISchema {
		id: 'personOrganization',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Person <-> organization relationship',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Name. */
		            'roleIds': {
		                label: 'Name',
		                type: 'id',
		                isRequired: true,
		                isArray: true,
		                options: undefined
		            },
		            /** Organization. */
		            'organizationId': {
		                label: 'Organization',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Person. */
		            'personId': {
		                label: 'Person',
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
		            'dateDeleted': {
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type PersonOrganizationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.IPersonOrganizationSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** Various sizes that a profile image comes in. */
	export interface IProfileImage {
		
			/** 60x60. */
			'profile60': string
			/** 150x150. */
			'profile150': string
			/** 60x60. */
			'profile60@2x': string
			/** 150x150. */
			'profile150@2x': string
	}

	export interface IProfileImageSchema extends SpruceSchema.ISchema {
		id: 'profileImage',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Profile Image Sizes',
		description: 'Various sizes that a profile image comes in.',
		    fields: {
		            /** 60x60. */
		            'profile60': {
		                label: '60x60',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** 150x150. */
		            'profile150': {
		                label: '150x150',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** 60x60. */
		            'profile60@2x': {
		                label: '60x60',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** 150x150. */
		            'profile150@2x': {
		                label: '150x150',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type ProfileImageEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.IProfileImageSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A human being. */
	export interface IPerson {
		
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
			/** Profile photos. */
			'profileImages'?: SpruceSchemas.Spruce.v2020_07_22.IProfileImage| undefined | null
			
			'dateCreated': number
			
			'dateScrambled'?: number| undefined | null
	}

	export interface IPersonSchema extends SpruceSchema.ISchema {
		id: 'person',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Person',
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
		            /** Profile photos. */
		            'profileImages': {
		                label: 'Profile photos',
		                type: 'schema',
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.IProfileImageSchema,}
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateScrambled': {
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type PersonEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.IPersonSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** Everyone in Spruce breaks into 5 roles. Owner, District/Regional Manager, Manager, Teammate, and Guest. */
	export interface IRole {
		
			/** Id. */
			'id': string
			/** Slug. */
			'slug': string
			/** Name. */
			'name': string
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
	}

	export interface IRoleSchema extends SpruceSchema.ISchema {
		id: 'role',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Role',
		description: 'Everyone in Spruce breaks into 5 roles. Owner, District/Regional Manager, Manager, Teammate, and Guest.',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Slug. */
		            'slug': {
		                label: 'Slug',
		                type: 'text',
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
		    }
	}

	export type RoleEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.IRoleSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface ISkillCreator {
		
			
			'skillId'?: string| undefined | null
			
			'personId'?: string| undefined | null
	}

	export interface ISkillCreatorSchema extends SpruceSchema.ISchema {
		id: 'skillCreator',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Skill creator',
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

	export type SkillCreatorEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.ISkillCreatorSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** An ability Sprucebot has learned. */
	export interface ISkill {
		
			/** Id. */
			'id': string
			/** Id. */
			'apiKey': string
			/** Name. */
			'name': string
			/** Description. */
			'description'?: string| undefined | null
			/** Slug. */
			'slug': string
			/** Creators. The people or skills who created and own this skill. */
			'creators': SpruceSchemas.Spruce.v2020_07_22.ISkillCreator[]
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
	}

	export interface ISkillSchema extends SpruceSchema.ISchema {
		id: 'skill',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Skill',
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
		            /** Slug. */
		            'slug': {
		                label: 'Slug',
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
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.ISkillCreatorSchema,}
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
		    }
	}

	export type SkillEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.ISkillSchema>

}




