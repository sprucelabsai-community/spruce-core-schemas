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
			/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
			'isPublished'?: boolean| undefined | null
			/** Global. Does this skill require needing to be installed anywhere. */
			'canBeInstalled'?: boolean| undefined | null
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
			/** Timezone. */
			'timezone'?: ("Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Rarotonga" | "Pacific/Honolulu" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier" | "America/Adak" | "America/Anchorage" | "America/Juneau" | "America/Metlakatla" | "America/Nome" | "America/Sitka" | "America/Yakutat" | "Pacific/Pitcairn" | "America/Hermosillo" | "America/Dawson_Creek" | "America/Fort_Nelson" | "America/Phoenix" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Dawson" | "America/Whitehorse" | "America/Belize" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Regina" | "America/Swift_Current" | "America/Tegucigalpa" | "Pacific/Easter" | "Pacific/Galapagos" | "America/Chihuahua" | "America/Mazatlan" | "America/Boise" | "America/Cambridge_Bay" | "America/Denver" | "America/Edmonton" | "America/Inuvik" | "America/Ojinaga" | "America/Yellowknife" | "America/Eirunepe" | "America/Rio_Branco" | "America/Bahia_Banderas" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/Chicago" | "America/Indiana/Knox" | "America/Matamoros" | "America/Menominee" | "America/Merida" | "America/Mexico_City" | "America/Monterrey" | "America/North_Dakota/New_Salem" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Resolute" | "America/Indiana/Tell_City" | "America/Winnipeg" | "America/Bogota" | "America/Cancun" | "America/Jamaica" | "America/Panama" | "America/Guayaquil" | "America/Lima" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Manaus" | "America/Porto_Velho" | "America/Barbados" | "America/Martinique" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/La_Paz" | "America/Santiago" | "America/Havana" | "America/Detroit" | "America/Grand_Turk" | "America/Indiana/Indianapolis" | "America/Iqaluit" | "America/Kentucky/Louisville" | "America/Indiana/Marengo" | "America/Kentucky/Monticello" | "America/New_York" | "America/Nipigon" | "America/Pangnirtung" | "America/Indiana/Petersburg" | "America/Port-au-Prince" | "America/Thunder_Bay" | "America/Toronto" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Guyana" | "America/Asuncion" | "America/Caracas" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "Atlantic/Bermuda" | "America/Glace_Bay" | "America/Goose_Bay" | "America/Halifax" | "America/Moncton" | "America/Thule" | "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Fortaleza" | "America/Maceio" | "America/Recife" | "America/Santarem" | "America/Sao_Paulo" | "Atlantic/Stanley" | "America/Cayenne" | "Antarctica/Palmer" | "America/Punta_Arenas" | "Antarctica/Rothera" | "America/Paramaribo" | "America/Montevideo" | "America/St_Johns" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Miquelon" | "America/Nuuk" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "UTC" | "America/Scoresbysund" | "Etc/GMT" | "Africa/Abidjan" | "Africa/Bissau" | "America/Danmarkshavn" | "Africa/Monrovia" | "Atlantic/Reykjavik" | "Africa/Sao_Tome" | "Africa/Algiers" | "Africa/Tunis" | "Europe/Dublin" | "Africa/Casablanca" | "Europe/London" | "Africa/Lagos" | "Africa/Ndjamena" | "Atlantic/Canary" | "Atlantic/Faroe" | "Europe/Lisbon" | "Atlantic/Madeira" | "Africa/El_Aaiun" | "Africa/Juba" | "Africa/Khartoum" | "Africa/Maputo" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Africa/Ceuta" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Europe/Kaliningrad" | "Africa/Tripoli" | "Africa/Johannesburg" | "Antarctica/Troll" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Africa/Nairobi" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Europe/Bucharest" | "Europe/Chisinau" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Hebron" | "Europe/Helsinki" | "Europe/Kiev" | "Asia/Nicosia" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Uzhgorod" | "Europe/Vilnius" | "Europe/Zaporozhye" | "Asia/Famagusta" | "Asia/Jerusalem" | "Europe/Kirov" | "Europe/Minsk" | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Istanbul" | "Europe/Volgograd" | "Asia/Yerevan" | "Europe/Astrakhan" | "Asia/Baku" | "Asia/Tbilisi" | "Asia/Dubai" | "Indian/Mauritius" | "Indian/Reunion" | "Europe/Samara" | "Europe/Saratov" | "Indian/Mahe" | "Europe/Ulyanovsk" | "Asia/Kabul" | "Asia/Tehran" | "Indian/Kerguelen" | "Indian/Maldives" | "Antarctica/Mawson" | "Asia/Karachi" | "Asia/Dushanbe" | "Asia/Ashgabat" | "Asia/Samarkand" | "Asia/Tashkent" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Atyrau" | "Asia/Oral" | "Asia/Qyzylorda" | "Asia/Yekaterinburg" | "Asia/Colombo" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Dhaka" | "Asia/Thimphu" | "Asia/Almaty" | "Asia/Qostanay" | "Indian/Chagos" | "Asia/Bishkek" | "Asia/Omsk" | "Asia/Urumqi" | "Antarctica/Vostok" | "Indian/Cocos" | "Asia/Yangon" | "Asia/Barnaul" | "Indian/Christmas" | "Antarctica/Davis" | "Asia/Hovd" | "Asia/Bangkok" | "Asia/Ho_Chi_Minh" | "Asia/Krasnoyarsk" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Tomsk" | "Asia/Jakarta" | "Asia/Pontianak" | "Australia/Perth" | "Asia/Brunei" | "Asia/Makassar" | "Asia/Macau" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Manila" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Ulaanbaatar" | "Australia/Eucla" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Tokyo" | "Asia/Pyongyang" | "Asia/Seoul" | "Pacific/Palau" | "Asia/Chita" | "Asia/Khandyga" | "Asia/Yakutsk" | "Australia/Darwin" | "Australia/Adelaide" | "Australia/Broken_Hill" | "Australia/Brisbane" | "Australia/Lindeman" | "Pacific/Guam" | "Pacific/Chuuk" | "Australia/Hobart" | "Antarctica/Macquarie" | "Australia/Melbourne" | "Australia/Sydney" | "Pacific/Port_Moresby" | "Asia/Ust-Nera" | "Asia/Vladivostok" | "Australia/Lord_Howe" | "Pacific/Bougainville" | "Antarctica/Casey" | "Pacific/Kosrae" | "Asia/Magadan" | "Pacific/Noumea" | "Pacific/Norfolk" | "Pacific/Pohnpei" | "Asia/Sakhalin" | "Pacific/Guadalcanal" | "Asia/Srednekolymsk" | "Pacific/Efate" | "Asia/Anadyr" | "Pacific/Fiji" | "Pacific/Tarawa" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Auckland" | "Asia/Kamchatka" | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Chatham" | "Pacific/Apia" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati")| undefined | null
			/** Phone. A number that can be texted */
			'phone'?: string| undefined | null
			/** Avatar src. */
			'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateUpdated'?: SpruceSchema.DateTimeFieldValue| undefined | null
			
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
		            /** Timezone. */
		            'timezone': {
		                label: 'Timezone',
		                type: 'select',
		                options: {choices: [{"value":"Pacific/Niue","label":"Niue Time"},{"value":"Pacific/Pago_Pago","label":"Samoa Standard Time"},{"value":"Pacific/Rarotonga","label":"Cook Islands Standard Time"},{"value":"Pacific/Honolulu","label":"Hawaii-Aleutian Standard Time"},{"value":"Pacific/Tahiti","label":"Tahiti Time"},{"value":"Pacific/Marquesas","label":"Marquesas Time"},{"value":"Pacific/Gambier","label":"Gambier Time"},{"value":"America/Adak","label":"Hawaii-Aleutian Time (Adak)"},{"value":"America/Anchorage","label":"Alaska Time - Anchorage"},{"value":"America/Juneau","label":"Alaska Time - Juneau"},{"value":"America/Metlakatla","label":"Alaska Time - Metlakatla"},{"value":"America/Nome","label":"Alaska Time - Nome"},{"value":"America/Sitka","label":"Alaska Time - Sitka"},{"value":"America/Yakutat","label":"Alaska Time - Yakutat"},{"value":"Pacific/Pitcairn","label":"Pitcairn Time"},{"value":"America/Hermosillo","label":"Mexican Pacific Standard Time"},{"value":"America/Dawson_Creek","label":"Mountain Standard Time - Dawson Creek"},{"value":"America/Fort_Nelson","label":"Mountain Standard Time - Fort Nelson"},{"value":"America/Phoenix","label":"Mountain Standard Time - Phoenix"},{"value":"America/Los_Angeles","label":"Pacific Time - Los Angeles"},{"value":"America/Tijuana","label":"Pacific Time - Tijuana"},{"value":"America/Vancouver","label":"Pacific Time - Vancouver"},{"value":"America/Dawson","label":"Yukon Time - Dawson"},{"value":"America/Whitehorse","label":"Yukon Time - Whitehorse"},{"value":"America/Belize","label":"Central Standard Time - Belize"},{"value":"America/Costa_Rica","label":"Central Standard Time - Costa Rica"},{"value":"America/El_Salvador","label":"Central Standard Time - El Salvador"},{"value":"America/Guatemala","label":"Central Standard Time - Guatemala"},{"value":"America/Managua","label":"Central Standard Time - Managua"},{"value":"America/Regina","label":"Central Standard Time - Regina"},{"value":"America/Swift_Current","label":"Central Standard Time - Swift Current"},{"value":"America/Tegucigalpa","label":"Central Standard Time - Tegucigalpa"},{"value":"Pacific/Easter","label":"Easter Island Time"},{"value":"Pacific/Galapagos","label":"Galapagos Time"},{"value":"America/Chihuahua","label":"Mexican Pacific Time - Chihuahua"},{"value":"America/Mazatlan","label":"Mexican Pacific Time - Mazatlan"},{"value":"America/Boise","label":"Mountain Time - Boise"},{"value":"America/Cambridge_Bay","label":"Mountain Time - Cambridge Bay"},{"value":"America/Denver","label":"Mountain Time - Denver"},{"value":"America/Edmonton","label":"Mountain Time - Edmonton"},{"value":"America/Inuvik","label":"Mountain Time - Inuvik"},{"value":"America/Ojinaga","label":"Mountain Time - Ojinaga"},{"value":"America/Yellowknife","label":"Mountain Time - Yellowknife"},{"value":"America/Eirunepe","label":"Acre Standard Time - Eirunepe"},{"value":"America/Rio_Branco","label":"Acre Standard Time - Rio Branco"},{"value":"America/Bahia_Banderas","label":"Central Time - Bahia Banderas"},{"value":"America/North_Dakota/Beulah","label":"Central Time - Beulah, North Dakota"},{"value":"America/North_Dakota/Center","label":"Central Time - Center, North Dakota"},{"value":"America/Chicago","label":"Central Time - Chicago"},{"value":"America/Indiana/Knox","label":"Central Time - Knox, Indiana"},{"value":"America/Matamoros","label":"Central Time - Matamoros"},{"value":"America/Menominee","label":"Central Time - Menominee"},{"value":"America/Merida","label":"Central Time - Merida"},{"value":"America/Mexico_City","label":"Central Time - Mexico City"},{"value":"America/Monterrey","label":"Central Time - Monterrey"},{"value":"America/North_Dakota/New_Salem","label":"Central Time - New Salem, North Dakota"},{"value":"America/Rainy_River","label":"Central Time - Rainy River"},{"value":"America/Rankin_Inlet","label":"Central Time - Rankin Inlet"},{"value":"America/Resolute","label":"Central Time - Resolute"},{"value":"America/Indiana/Tell_City","label":"Central Time - Tell City, Indiana"},{"value":"America/Winnipeg","label":"Central Time - Winnipeg"},{"value":"America/Bogota","label":"Colombia Standard Time"},{"value":"America/Cancun","label":"Eastern Standard Time - Cancun"},{"value":"America/Jamaica","label":"Eastern Standard Time - Jamaica"},{"value":"America/Panama","label":"Eastern Standard Time - Panama"},{"value":"America/Guayaquil","label":"Ecuador Time"},{"value":"America/Lima","label":"Peru Standard Time"},{"value":"America/Boa_Vista","label":"Amazon Standard Time - Boa Vista"},{"value":"America/Campo_Grande","label":"Amazon Standard Time - Campo Grande"},{"value":"America/Cuiaba","label":"Amazon Standard Time - Cuiaba"},{"value":"America/Manaus","label":"Amazon Standard Time - Manaus"},{"value":"America/Porto_Velho","label":"Amazon Standard Time - Porto Velho"},{"value":"America/Barbados","label":"Atlantic Standard Time - Barbados"},{"value":"America/Martinique","label":"Atlantic Standard Time - Martinique"},{"value":"America/Puerto_Rico","label":"Atlantic Standard Time - Puerto Rico"},{"value":"America/Santo_Domingo","label":"Atlantic Standard Time - Santo Domingo"},{"value":"America/La_Paz","label":"Bolivia Time"},{"value":"America/Santiago","label":"Chile Time"},{"value":"America/Havana","label":"Cuba Time"},{"value":"America/Detroit","label":"Eastern Time - Detroit"},{"value":"America/Grand_Turk","label":"Eastern Time - Grand Turk"},{"value":"America/Indiana/Indianapolis","label":"Eastern Time - Indianapolis"},{"value":"America/Iqaluit","label":"Eastern Time - Iqaluit"},{"value":"America/Kentucky/Louisville","label":"Eastern Time - Louisville"},{"value":"America/Indiana/Marengo","label":"Eastern Time - Marengo, Indiana"},{"value":"America/Kentucky/Monticello","label":"Eastern Time - Monticello, Kentucky"},{"value":"America/New_York","label":"Eastern Time - New York"},{"value":"America/Nipigon","label":"Eastern Time - Nipigon"},{"value":"America/Pangnirtung","label":"Eastern Time - Pangnirtung"},{"value":"America/Indiana/Petersburg","label":"Eastern Time - Petersburg, Indiana"},{"value":"America/Port-au-Prince","label":"Eastern Time - Port-au-Prince"},{"value":"America/Thunder_Bay","label":"Eastern Time - Thunder Bay"},{"value":"America/Toronto","label":"Eastern Time - Toronto"},{"value":"America/Indiana/Vevay","label":"Eastern Time - Vevay, Indiana"},{"value":"America/Indiana/Vincennes","label":"Eastern Time - Vincennes, Indiana"},{"value":"America/Indiana/Winamac","label":"Eastern Time - Winamac, Indiana"},{"value":"America/Guyana","label":"Guyana Time"},{"value":"America/Asuncion","label":"Paraguay Time"},{"value":"America/Caracas","label":"Venezuela Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Standard Time - Buenos Aires"},{"value":"America/Argentina/Catamarca","label":"Argentina Standard Time - Catamarca"},{"value":"America/Argentina/Cordoba","label":"Argentina Standard Time - Cordoba"},{"value":"America/Argentina/Jujuy","label":"Argentina Standard Time - Jujuy"},{"value":"America/Argentina/La_Rioja","label":"Argentina Standard Time - La Rioja"},{"value":"America/Argentina/Mendoza","label":"Argentina Standard Time - Mendoza"},{"value":"America/Argentina/Rio_Gallegos","label":"Argentina Standard Time - Rio Gallegos"},{"value":"America/Argentina/Salta","label":"Argentina Standard Time - Salta"},{"value":"America/Argentina/San_Juan","label":"Argentina Standard Time - San Juan"},{"value":"America/Argentina/San_Luis","label":"Argentina Standard Time - San Luis"},{"value":"America/Argentina/Tucuman","label":"Argentina Standard Time - Tucuman"},{"value":"America/Argentina/Ushuaia","label":"Argentina Standard Time - Ushuaia"},{"value":"Atlantic/Bermuda","label":"Atlantic Time - Bermuda"},{"value":"America/Glace_Bay","label":"Atlantic Time - Glace Bay"},{"value":"America/Goose_Bay","label":"Atlantic Time - Goose Bay"},{"value":"America/Halifax","label":"Atlantic Time - Halifax"},{"value":"America/Moncton","label":"Atlantic Time - Moncton"},{"value":"America/Thule","label":"Atlantic Time - Thule"},{"value":"America/Araguaina","label":"Brasilia Standard Time - Araguaina"},{"value":"America/Bahia","label":"Brasilia Standard Time - Bahia"},{"value":"America/Belem","label":"Brasilia Standard Time - Belem"},{"value":"America/Fortaleza","label":"Brasilia Standard Time - Fortaleza"},{"value":"America/Maceio","label":"Brasilia Standard Time - Maceio"},{"value":"America/Recife","label":"Brasilia Standard Time - Recife"},{"value":"America/Santarem","label":"Brasilia Standard Time - Santarem"},{"value":"America/Sao_Paulo","label":"Brasilia Standard Time - Sao Paulo"},{"value":"Atlantic/Stanley","label":"Falkland Islands Standard Time"},{"value":"America/Cayenne","label":"French Guiana Time"},{"value":"Antarctica/Palmer","label":"Palmer Time"},{"value":"America/Punta_Arenas","label":"Punta Arenas Time"},{"value":"Antarctica/Rothera","label":"Rothera Time"},{"value":"America/Paramaribo","label":"Suriname Time"},{"value":"America/Montevideo","label":"Uruguay Standard Time"},{"value":"America/St_Johns","label":"Newfoundland Time"},{"value":"America/Noronha","label":"Fernando de Noronha Standard Time"},{"value":"Atlantic/South_Georgia","label":"South Georgia Time"},{"value":"America/Miquelon","label":"St. Pierre & Miquelon Time"},{"value":"America/Nuuk","label":"West Greenland Time"},{"value":"Atlantic/Cape_Verde","label":"Cape Verde Standard Time"},{"value":"Atlantic/Azores","label":"Azores Time"},{"value":"UTC","label":"Coordinated Universal Time"},{"value":"America/Scoresbysund","label":"East Greenland Time"},{"value":"Etc/GMT","label":"Greenwich Mean Time"},{"value":"Africa/Abidjan","label":"Greenwich Mean Time - Abidjan"},{"value":"Africa/Bissau","label":"Greenwich Mean Time - Bissau"},{"value":"America/Danmarkshavn","label":"Greenwich Mean Time - Danmarkshavn"},{"value":"Africa/Monrovia","label":"Greenwich Mean Time - Monrovia"},{"value":"Atlantic/Reykjavik","label":"Greenwich Mean Time - Reykjavik"},{"value":"Africa/Sao_Tome","label":"Greenwich Mean Time - São Tomé"},{"value":"Africa/Algiers","label":"Central European Standard Time - Algiers"},{"value":"Africa/Tunis","label":"Central European Standard Time - Tunis"},{"value":"Europe/Dublin","label":"Ireland Time"},{"value":"Africa/Casablanca","label":"Morocco Time"},{"value":"Europe/London","label":"United Kingdom Time"},{"value":"Africa/Lagos","label":"West Africa Standard Time - Lagos"},{"value":"Africa/Ndjamena","label":"West Africa Standard Time - Ndjamena"},{"value":"Atlantic/Canary","label":"Western European Time - Canary"},{"value":"Atlantic/Faroe","label":"Western European Time - Faroe"},{"value":"Europe/Lisbon","label":"Western European Time - Lisbon"},{"value":"Atlantic/Madeira","label":"Western European Time - Madeira"},{"value":"Africa/El_Aaiun","label":"Western Sahara Time"},{"value":"Africa/Juba","label":"Central Africa Time - Juba"},{"value":"Africa/Khartoum","label":"Central Africa Time - Khartoum"},{"value":"Africa/Maputo","label":"Central Africa Time - Maputo"},{"value":"Africa/Windhoek","label":"Central Africa Time - Windhoek"},{"value":"Europe/Amsterdam","label":"Central European Time - Amsterdam"},{"value":"Europe/Andorra","label":"Central European Time - Andorra"},{"value":"Europe/Belgrade","label":"Central European Time - Belgrade"},{"value":"Europe/Berlin","label":"Central European Time - Berlin"},{"value":"Europe/Brussels","label":"Central European Time - Brussels"},{"value":"Europe/Budapest","label":"Central European Time - Budapest"},{"value":"Africa/Ceuta","label":"Central European Time - Ceuta"},{"value":"Europe/Copenhagen","label":"Central European Time - Copenhagen"},{"value":"Europe/Gibraltar","label":"Central European Time - Gibraltar"},{"value":"Europe/Luxembourg","label":"Central European Time - Luxembourg"},{"value":"Europe/Madrid","label":"Central European Time - Madrid"},{"value":"Europe/Malta","label":"Central European Time - Malta"},{"value":"Europe/Monaco","label":"Central European Time - Monaco"},{"value":"Europe/Oslo","label":"Central European Time - Oslo"},{"value":"Europe/Paris","label":"Central European Time - Paris"},{"value":"Europe/Prague","label":"Central European Time - Prague"},{"value":"Europe/Rome","label":"Central European Time - Rome"},{"value":"Europe/Stockholm","label":"Central European Time - Stockholm"},{"value":"Europe/Tirane","label":"Central European Time - Tirane"},{"value":"Europe/Vienna","label":"Central European Time - Vienna"},{"value":"Europe/Warsaw","label":"Central European Time - Warsaw"},{"value":"Europe/Zurich","label":"Central European Time - Zurich"},{"value":"Africa/Cairo","label":"Eastern European Standard Time - Cairo"},{"value":"Europe/Kaliningrad","label":"Eastern European Standard Time - Kaliningrad"},{"value":"Africa/Tripoli","label":"Eastern European Standard Time - Tripoli"},{"value":"Africa/Johannesburg","label":"South Africa Standard Time"},{"value":"Antarctica/Troll","label":"Troll Time"},{"value":"Asia/Baghdad","label":"Arabian Standard Time - Baghdad"},{"value":"Asia/Qatar","label":"Arabian Standard Time - Qatar"},{"value":"Asia/Riyadh","label":"Arabian Standard Time - Riyadh"},{"value":"Africa/Nairobi","label":"East Africa Time"},{"value":"Asia/Amman","label":"Eastern European Time - Amman"},{"value":"Europe/Athens","label":"Eastern European Time - Athens"},{"value":"Asia/Beirut","label":"Eastern European Time - Beirut"},{"value":"Europe/Bucharest","label":"Eastern European Time - Bucharest"},{"value":"Europe/Chisinau","label":"Eastern European Time - Chisinau"},{"value":"Asia/Damascus","label":"Eastern European Time - Damascus"},{"value":"Asia/Gaza","label":"Eastern European Time - Gaza"},{"value":"Asia/Hebron","label":"Eastern European Time - Hebron"},{"value":"Europe/Helsinki","label":"Eastern European Time - Helsinki"},{"value":"Europe/Kiev","label":"Eastern European Time - Kyiv"},{"value":"Asia/Nicosia","label":"Eastern European Time - Nicosia"},{"value":"Europe/Riga","label":"Eastern European Time - Riga"},{"value":"Europe/Sofia","label":"Eastern European Time - Sofia"},{"value":"Europe/Tallinn","label":"Eastern European Time - Tallinn"},{"value":"Europe/Uzhgorod","label":"Eastern European Time - Uzhhorod"},{"value":"Europe/Vilnius","label":"Eastern European Time - Vilnius"},{"value":"Europe/Zaporozhye","label":"Eastern European Time - Zaporozhye"},{"value":"Asia/Famagusta","label":"Famagusta Time"},{"value":"Asia/Jerusalem","label":"Israel Time"},{"value":"Europe/Kirov","label":"Kirov Time"},{"value":"Europe/Minsk","label":"Moscow Standard Time - Minsk"},{"value":"Europe/Moscow","label":"Moscow Standard Time - Moscow"},{"value":"Europe/Simferopol","label":"Moscow Standard Time - Simferopol"},{"value":"Europe/Istanbul","label":"Turkey Time"},{"value":"Europe/Volgograd","label":"Volgograd Standard Time"},{"value":"Asia/Yerevan","label":"Armenia Standard Time"},{"value":"Europe/Astrakhan","label":"Astrakhan Time"},{"value":"Asia/Baku","label":"Azerbaijan Standard Time"},{"value":"Asia/Tbilisi","label":"Georgia Standard Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Indian/Mauritius","label":"Mauritius Standard Time"},{"value":"Indian/Reunion","label":"Réunion Time"},{"value":"Europe/Samara","label":"Samara Standard Time"},{"value":"Europe/Saratov","label":"Saratov Time"},{"value":"Indian/Mahe","label":"Seychelles Time"},{"value":"Europe/Ulyanovsk","label":"Ulyanovsk Time"},{"value":"Asia/Kabul","label":"Afghanistan Time"},{"value":"Asia/Tehran","label":"Iran Time"},{"value":"Indian/Kerguelen","label":"French Southern & Antarctic Time"},{"value":"Indian/Maldives","label":"Maldives Time"},{"value":"Antarctica/Mawson","label":"Mawson Time"},{"value":"Asia/Karachi","label":"Pakistan Standard Time"},{"value":"Asia/Dushanbe","label":"Tajikistan Time"},{"value":"Asia/Ashgabat","label":"Turkmenistan Standard Time"},{"value":"Asia/Samarkand","label":"Uzbekistan Standard Time - Samarkand"},{"value":"Asia/Tashkent","label":"Uzbekistan Standard Time - Tashkent"},{"value":"Asia/Aqtau","label":"West Kazakhstan Time - Aqtau"},{"value":"Asia/Aqtobe","label":"West Kazakhstan Time - Aqtobe"},{"value":"Asia/Atyrau","label":"West Kazakhstan Time - Atyrau"},{"value":"Asia/Oral","label":"West Kazakhstan Time - Oral"},{"value":"Asia/Qyzylorda","label":"West Kazakhstan Time - Qyzylorda"},{"value":"Asia/Yekaterinburg","label":"Yekaterinburg Standard Time"},{"value":"Asia/Colombo","label":"India Standard Time - Colombo"},{"value":"Asia/Kolkata","label":"India Standard Time - Kolkata"},{"value":"Asia/Kathmandu","label":"Nepal Time"},{"value":"Asia/Dhaka","label":"Bangladesh Standard Time"},{"value":"Asia/Thimphu","label":"Bhutan Time"},{"value":"Asia/Almaty","label":"East Kazakhstan Time - Almaty"},{"value":"Asia/Qostanay","label":"East Kazakhstan Time - Kostanay"},{"value":"Indian/Chagos","label":"Indian Ocean Time"},{"value":"Asia/Bishkek","label":"Kyrgyzstan Time"},{"value":"Asia/Omsk","label":"Omsk Standard Time"},{"value":"Asia/Urumqi","label":"Urumqi Time"},{"value":"Antarctica/Vostok","label":"Vostok Time"},{"value":"Indian/Cocos","label":"Cocos Islands Time"},{"value":"Asia/Yangon","label":"Myanmar Time"},{"value":"Asia/Barnaul","label":"Barnaul Time"},{"value":"Indian/Christmas","label":"Christmas Island Time"},{"value":"Antarctica/Davis","label":"Davis Time"},{"value":"Asia/Hovd","label":"Hovd Standard Time"},{"value":"Asia/Bangkok","label":"Indochina Time - Bangkok"},{"value":"Asia/Ho_Chi_Minh","label":"Indochina Time - Ho Chi Minh City"},{"value":"Asia/Krasnoyarsk","label":"Krasnoyarsk Standard Time - Krasnoyarsk"},{"value":"Asia/Novokuznetsk","label":"Krasnoyarsk Standard Time - Novokuznetsk"},{"value":"Asia/Novosibirsk","label":"Novosibirsk Standard Time"},{"value":"Asia/Tomsk","label":"Tomsk Time"},{"value":"Asia/Jakarta","label":"Western Indonesia Time - Jakarta"},{"value":"Asia/Pontianak","label":"Western Indonesia Time - Pontianak"},{"value":"Australia/Perth","label":"Australian Western Standard Time"},{"value":"Asia/Brunei","label":"Brunei Darussalam Time"},{"value":"Asia/Makassar","label":"Central Indonesia Time"},{"value":"Asia/Macau","label":"China Standard Time - Macao"},{"value":"Asia/Shanghai","label":"China Standard Time - Shanghai"},{"value":"Asia/Hong_Kong","label":"Hong Kong Standard Time"},{"value":"Asia/Irkutsk","label":"Irkutsk Standard Time"},{"value":"Asia/Kuala_Lumpur","label":"Malaysia Time - Kuala Lumpur"},{"value":"Asia/Kuching","label":"Malaysia Time - Kuching"},{"value":"Asia/Manila","label":"Philippine Standard Time"},{"value":"Asia/Singapore","label":"Singapore Standard Time"},{"value":"Asia/Taipei","label":"Taipei Standard Time"},{"value":"Asia/Choibalsan","label":"Ulaanbaatar Standard Time - Choibalsan"},{"value":"Asia/Ulaanbaatar","label":"Ulaanbaatar Standard Time - Ulaanbaatar"},{"value":"Australia/Eucla","label":"Australian Central Western Standard Time"},{"value":"Asia/Dili","label":"East Timor Time"},{"value":"Asia/Jayapura","label":"Eastern Indonesia Time"},{"value":"Asia/Tokyo","label":"Japan Standard Time"},{"value":"Asia/Pyongyang","label":"Korean Standard Time - Pyongyang"},{"value":"Asia/Seoul","label":"Korean Standard Time - Seoul"},{"value":"Pacific/Palau","label":"Palau Time"},{"value":"Asia/Chita","label":"Yakutsk Standard Time - Chita"},{"value":"Asia/Khandyga","label":"Yakutsk Standard Time - Khandyga"},{"value":"Asia/Yakutsk","label":"Yakutsk Standard Time - Yakutsk"},{"value":"Australia/Darwin","label":"Australian Central Standard Time"},{"value":"Australia/Adelaide","label":"Central Australia Time - Adelaide"},{"value":"Australia/Broken_Hill","label":"Central Australia Time - Broken Hill"},{"value":"Australia/Brisbane","label":"Australian Eastern Standard Time - Brisbane"},{"value":"Australia/Lindeman","label":"Australian Eastern Standard Time - Lindeman"},{"value":"Pacific/Guam","label":"Chamorro Standard Time"},{"value":"Pacific/Chuuk","label":"Chuuk Time"},{"value":"Australia/Hobart","label":"Eastern Australia Time - Hobart"},{"value":"Antarctica/Macquarie","label":"Eastern Australia Time - Macquarie"},{"value":"Australia/Melbourne","label":"Eastern Australia Time - Melbourne"},{"value":"Australia/Sydney","label":"Eastern Australia Time - Sydney"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time"},{"value":"Asia/Ust-Nera","label":"Vladivostok Standard Time - Ust-Nera"},{"value":"Asia/Vladivostok","label":"Vladivostok Standard Time - Vladivostok"},{"value":"Australia/Lord_Howe","label":"Lord Howe Time"},{"value":"Pacific/Bougainville","label":"Bougainville Time"},{"value":"Antarctica/Casey","label":"Casey Time"},{"value":"Pacific/Kosrae","label":"Kosrae Time"},{"value":"Asia/Magadan","label":"Magadan Standard Time"},{"value":"Pacific/Noumea","label":"New Caledonia Standard Time"},{"value":"Pacific/Norfolk","label":"Norfolk Island Time"},{"value":"Pacific/Pohnpei","label":"Ponape Time"},{"value":"Asia/Sakhalin","label":"Sakhalin Standard Time"},{"value":"Pacific/Guadalcanal","label":"Solomon Islands Time"},{"value":"Asia/Srednekolymsk","label":"Srednekolymsk Time"},{"value":"Pacific/Efate","label":"Vanuatu Standard Time"},{"value":"Asia/Anadyr","label":"Anadyr Standard Time"},{"value":"Pacific/Fiji","label":"Fiji Time"},{"value":"Pacific/Tarawa","label":"Gilbert Islands Time"},{"value":"Pacific/Kwajalein","label":"Marshall Islands Time - Kwajalein"},{"value":"Pacific/Majuro","label":"Marshall Islands Time - Majuro"},{"value":"Pacific/Nauru","label":"Nauru Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Asia/Kamchatka","label":"Petropavlovsk-Kamchatski Standard Time"},{"value":"Pacific/Funafuti","label":"Tuvalu Time"},{"value":"Pacific/Wake","label":"Wake Island Time"},{"value":"Pacific/Wallis","label":"Wallis & Futuna Time"},{"value":"Pacific/Chatham","label":"Chatham Time"},{"value":"Pacific/Apia","label":"Apia Standard Time"},{"value":"Pacific/Fakaofo","label":"Tokelau Time"},{"value":"Pacific/Tongatapu","label":"Tonga Standard Time"},{"value":"Pacific/Kiritimati","label":"Line Islands Time"}],}
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

	/** A discrete communication between two humans or a human and a machine. */
	export interface Message {
		
			
			'id': string
			/** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
			'trackingId'?: string| undefined | null
			
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
			'num'?: string| undefined | null
			/** Slug. */
			'slug': string
			/** Public. Is this location viewable by guests? */
			'isPublic'?: boolean| undefined | null
			/** Main Phone. */
			'phone'?: string| undefined | null
			/** Timezone. */
			'timezone'?: ("Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Rarotonga" | "Pacific/Honolulu" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier" | "America/Adak" | "America/Anchorage" | "America/Juneau" | "America/Metlakatla" | "America/Nome" | "America/Sitka" | "America/Yakutat" | "Pacific/Pitcairn" | "America/Hermosillo" | "America/Dawson_Creek" | "America/Fort_Nelson" | "America/Phoenix" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Dawson" | "America/Whitehorse" | "America/Belize" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Regina" | "America/Swift_Current" | "America/Tegucigalpa" | "Pacific/Easter" | "Pacific/Galapagos" | "America/Chihuahua" | "America/Mazatlan" | "America/Boise" | "America/Cambridge_Bay" | "America/Denver" | "America/Edmonton" | "America/Inuvik" | "America/Ojinaga" | "America/Yellowknife" | "America/Eirunepe" | "America/Rio_Branco" | "America/Bahia_Banderas" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/Chicago" | "America/Indiana/Knox" | "America/Matamoros" | "America/Menominee" | "America/Merida" | "America/Mexico_City" | "America/Monterrey" | "America/North_Dakota/New_Salem" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Resolute" | "America/Indiana/Tell_City" | "America/Winnipeg" | "America/Bogota" | "America/Cancun" | "America/Jamaica" | "America/Panama" | "America/Guayaquil" | "America/Lima" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Manaus" | "America/Porto_Velho" | "America/Barbados" | "America/Martinique" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/La_Paz" | "America/Santiago" | "America/Havana" | "America/Detroit" | "America/Grand_Turk" | "America/Indiana/Indianapolis" | "America/Iqaluit" | "America/Kentucky/Louisville" | "America/Indiana/Marengo" | "America/Kentucky/Monticello" | "America/New_York" | "America/Nipigon" | "America/Pangnirtung" | "America/Indiana/Petersburg" | "America/Port-au-Prince" | "America/Thunder_Bay" | "America/Toronto" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Guyana" | "America/Asuncion" | "America/Caracas" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "Atlantic/Bermuda" | "America/Glace_Bay" | "America/Goose_Bay" | "America/Halifax" | "America/Moncton" | "America/Thule" | "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Fortaleza" | "America/Maceio" | "America/Recife" | "America/Santarem" | "America/Sao_Paulo" | "Atlantic/Stanley" | "America/Cayenne" | "Antarctica/Palmer" | "America/Punta_Arenas" | "Antarctica/Rothera" | "America/Paramaribo" | "America/Montevideo" | "America/St_Johns" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Miquelon" | "America/Nuuk" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "UTC" | "America/Scoresbysund" | "Etc/GMT" | "Africa/Abidjan" | "Africa/Bissau" | "America/Danmarkshavn" | "Africa/Monrovia" | "Atlantic/Reykjavik" | "Africa/Sao_Tome" | "Africa/Algiers" | "Africa/Tunis" | "Europe/Dublin" | "Africa/Casablanca" | "Europe/London" | "Africa/Lagos" | "Africa/Ndjamena" | "Atlantic/Canary" | "Atlantic/Faroe" | "Europe/Lisbon" | "Atlantic/Madeira" | "Africa/El_Aaiun" | "Africa/Juba" | "Africa/Khartoum" | "Africa/Maputo" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Africa/Ceuta" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Europe/Kaliningrad" | "Africa/Tripoli" | "Africa/Johannesburg" | "Antarctica/Troll" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Africa/Nairobi" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Europe/Bucharest" | "Europe/Chisinau" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Hebron" | "Europe/Helsinki" | "Europe/Kiev" | "Asia/Nicosia" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Uzhgorod" | "Europe/Vilnius" | "Europe/Zaporozhye" | "Asia/Famagusta" | "Asia/Jerusalem" | "Europe/Kirov" | "Europe/Minsk" | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Istanbul" | "Europe/Volgograd" | "Asia/Yerevan" | "Europe/Astrakhan" | "Asia/Baku" | "Asia/Tbilisi" | "Asia/Dubai" | "Indian/Mauritius" | "Indian/Reunion" | "Europe/Samara" | "Europe/Saratov" | "Indian/Mahe" | "Europe/Ulyanovsk" | "Asia/Kabul" | "Asia/Tehran" | "Indian/Kerguelen" | "Indian/Maldives" | "Antarctica/Mawson" | "Asia/Karachi" | "Asia/Dushanbe" | "Asia/Ashgabat" | "Asia/Samarkand" | "Asia/Tashkent" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Atyrau" | "Asia/Oral" | "Asia/Qyzylorda" | "Asia/Yekaterinburg" | "Asia/Colombo" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Dhaka" | "Asia/Thimphu" | "Asia/Almaty" | "Asia/Qostanay" | "Indian/Chagos" | "Asia/Bishkek" | "Asia/Omsk" | "Asia/Urumqi" | "Antarctica/Vostok" | "Indian/Cocos" | "Asia/Yangon" | "Asia/Barnaul" | "Indian/Christmas" | "Antarctica/Davis" | "Asia/Hovd" | "Asia/Bangkok" | "Asia/Ho_Chi_Minh" | "Asia/Krasnoyarsk" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Tomsk" | "Asia/Jakarta" | "Asia/Pontianak" | "Australia/Perth" | "Asia/Brunei" | "Asia/Makassar" | "Asia/Macau" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Manila" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Ulaanbaatar" | "Australia/Eucla" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Tokyo" | "Asia/Pyongyang" | "Asia/Seoul" | "Pacific/Palau" | "Asia/Chita" | "Asia/Khandyga" | "Asia/Yakutsk" | "Australia/Darwin" | "Australia/Adelaide" | "Australia/Broken_Hill" | "Australia/Brisbane" | "Australia/Lindeman" | "Pacific/Guam" | "Pacific/Chuuk" | "Australia/Hobart" | "Antarctica/Macquarie" | "Australia/Melbourne" | "Australia/Sydney" | "Pacific/Port_Moresby" | "Asia/Ust-Nera" | "Asia/Vladivostok" | "Australia/Lord_Howe" | "Pacific/Bougainville" | "Antarctica/Casey" | "Pacific/Kosrae" | "Asia/Magadan" | "Pacific/Noumea" | "Pacific/Norfolk" | "Pacific/Pohnpei" | "Asia/Sakhalin" | "Pacific/Guadalcanal" | "Asia/Srednekolymsk" | "Pacific/Efate" | "Asia/Anadyr" | "Pacific/Fiji" | "Pacific/Tarawa" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Auckland" | "Asia/Kamchatka" | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Chatham" | "Pacific/Apia" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati")| undefined | null
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
		                options: {choices: [{"value":"Pacific/Niue","label":"Niue Time"},{"value":"Pacific/Pago_Pago","label":"Samoa Standard Time"},{"value":"Pacific/Rarotonga","label":"Cook Islands Standard Time"},{"value":"Pacific/Honolulu","label":"Hawaii-Aleutian Standard Time"},{"value":"Pacific/Tahiti","label":"Tahiti Time"},{"value":"Pacific/Marquesas","label":"Marquesas Time"},{"value":"Pacific/Gambier","label":"Gambier Time"},{"value":"America/Adak","label":"Hawaii-Aleutian Time (Adak)"},{"value":"America/Anchorage","label":"Alaska Time - Anchorage"},{"value":"America/Juneau","label":"Alaska Time - Juneau"},{"value":"America/Metlakatla","label":"Alaska Time - Metlakatla"},{"value":"America/Nome","label":"Alaska Time - Nome"},{"value":"America/Sitka","label":"Alaska Time - Sitka"},{"value":"America/Yakutat","label":"Alaska Time - Yakutat"},{"value":"Pacific/Pitcairn","label":"Pitcairn Time"},{"value":"America/Hermosillo","label":"Mexican Pacific Standard Time"},{"value":"America/Dawson_Creek","label":"Mountain Standard Time - Dawson Creek"},{"value":"America/Fort_Nelson","label":"Mountain Standard Time - Fort Nelson"},{"value":"America/Phoenix","label":"Mountain Standard Time - Phoenix"},{"value":"America/Los_Angeles","label":"Pacific Time - Los Angeles"},{"value":"America/Tijuana","label":"Pacific Time - Tijuana"},{"value":"America/Vancouver","label":"Pacific Time - Vancouver"},{"value":"America/Dawson","label":"Yukon Time - Dawson"},{"value":"America/Whitehorse","label":"Yukon Time - Whitehorse"},{"value":"America/Belize","label":"Central Standard Time - Belize"},{"value":"America/Costa_Rica","label":"Central Standard Time - Costa Rica"},{"value":"America/El_Salvador","label":"Central Standard Time - El Salvador"},{"value":"America/Guatemala","label":"Central Standard Time - Guatemala"},{"value":"America/Managua","label":"Central Standard Time - Managua"},{"value":"America/Regina","label":"Central Standard Time - Regina"},{"value":"America/Swift_Current","label":"Central Standard Time - Swift Current"},{"value":"America/Tegucigalpa","label":"Central Standard Time - Tegucigalpa"},{"value":"Pacific/Easter","label":"Easter Island Time"},{"value":"Pacific/Galapagos","label":"Galapagos Time"},{"value":"America/Chihuahua","label":"Mexican Pacific Time - Chihuahua"},{"value":"America/Mazatlan","label":"Mexican Pacific Time - Mazatlan"},{"value":"America/Boise","label":"Mountain Time - Boise"},{"value":"America/Cambridge_Bay","label":"Mountain Time - Cambridge Bay"},{"value":"America/Denver","label":"Mountain Time - Denver"},{"value":"America/Edmonton","label":"Mountain Time - Edmonton"},{"value":"America/Inuvik","label":"Mountain Time - Inuvik"},{"value":"America/Ojinaga","label":"Mountain Time - Ojinaga"},{"value":"America/Yellowknife","label":"Mountain Time - Yellowknife"},{"value":"America/Eirunepe","label":"Acre Standard Time - Eirunepe"},{"value":"America/Rio_Branco","label":"Acre Standard Time - Rio Branco"},{"value":"America/Bahia_Banderas","label":"Central Time - Bahia Banderas"},{"value":"America/North_Dakota/Beulah","label":"Central Time - Beulah, North Dakota"},{"value":"America/North_Dakota/Center","label":"Central Time - Center, North Dakota"},{"value":"America/Chicago","label":"Central Time - Chicago"},{"value":"America/Indiana/Knox","label":"Central Time - Knox, Indiana"},{"value":"America/Matamoros","label":"Central Time - Matamoros"},{"value":"America/Menominee","label":"Central Time - Menominee"},{"value":"America/Merida","label":"Central Time - Merida"},{"value":"America/Mexico_City","label":"Central Time - Mexico City"},{"value":"America/Monterrey","label":"Central Time - Monterrey"},{"value":"America/North_Dakota/New_Salem","label":"Central Time - New Salem, North Dakota"},{"value":"America/Rainy_River","label":"Central Time - Rainy River"},{"value":"America/Rankin_Inlet","label":"Central Time - Rankin Inlet"},{"value":"America/Resolute","label":"Central Time - Resolute"},{"value":"America/Indiana/Tell_City","label":"Central Time - Tell City, Indiana"},{"value":"America/Winnipeg","label":"Central Time - Winnipeg"},{"value":"America/Bogota","label":"Colombia Standard Time"},{"value":"America/Cancun","label":"Eastern Standard Time - Cancun"},{"value":"America/Jamaica","label":"Eastern Standard Time - Jamaica"},{"value":"America/Panama","label":"Eastern Standard Time - Panama"},{"value":"America/Guayaquil","label":"Ecuador Time"},{"value":"America/Lima","label":"Peru Standard Time"},{"value":"America/Boa_Vista","label":"Amazon Standard Time - Boa Vista"},{"value":"America/Campo_Grande","label":"Amazon Standard Time - Campo Grande"},{"value":"America/Cuiaba","label":"Amazon Standard Time - Cuiaba"},{"value":"America/Manaus","label":"Amazon Standard Time - Manaus"},{"value":"America/Porto_Velho","label":"Amazon Standard Time - Porto Velho"},{"value":"America/Barbados","label":"Atlantic Standard Time - Barbados"},{"value":"America/Martinique","label":"Atlantic Standard Time - Martinique"},{"value":"America/Puerto_Rico","label":"Atlantic Standard Time - Puerto Rico"},{"value":"America/Santo_Domingo","label":"Atlantic Standard Time - Santo Domingo"},{"value":"America/La_Paz","label":"Bolivia Time"},{"value":"America/Santiago","label":"Chile Time"},{"value":"America/Havana","label":"Cuba Time"},{"value":"America/Detroit","label":"Eastern Time - Detroit"},{"value":"America/Grand_Turk","label":"Eastern Time - Grand Turk"},{"value":"America/Indiana/Indianapolis","label":"Eastern Time - Indianapolis"},{"value":"America/Iqaluit","label":"Eastern Time - Iqaluit"},{"value":"America/Kentucky/Louisville","label":"Eastern Time - Louisville"},{"value":"America/Indiana/Marengo","label":"Eastern Time - Marengo, Indiana"},{"value":"America/Kentucky/Monticello","label":"Eastern Time - Monticello, Kentucky"},{"value":"America/New_York","label":"Eastern Time - New York"},{"value":"America/Nipigon","label":"Eastern Time - Nipigon"},{"value":"America/Pangnirtung","label":"Eastern Time - Pangnirtung"},{"value":"America/Indiana/Petersburg","label":"Eastern Time - Petersburg, Indiana"},{"value":"America/Port-au-Prince","label":"Eastern Time - Port-au-Prince"},{"value":"America/Thunder_Bay","label":"Eastern Time - Thunder Bay"},{"value":"America/Toronto","label":"Eastern Time - Toronto"},{"value":"America/Indiana/Vevay","label":"Eastern Time - Vevay, Indiana"},{"value":"America/Indiana/Vincennes","label":"Eastern Time - Vincennes, Indiana"},{"value":"America/Indiana/Winamac","label":"Eastern Time - Winamac, Indiana"},{"value":"America/Guyana","label":"Guyana Time"},{"value":"America/Asuncion","label":"Paraguay Time"},{"value":"America/Caracas","label":"Venezuela Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Standard Time - Buenos Aires"},{"value":"America/Argentina/Catamarca","label":"Argentina Standard Time - Catamarca"},{"value":"America/Argentina/Cordoba","label":"Argentina Standard Time - Cordoba"},{"value":"America/Argentina/Jujuy","label":"Argentina Standard Time - Jujuy"},{"value":"America/Argentina/La_Rioja","label":"Argentina Standard Time - La Rioja"},{"value":"America/Argentina/Mendoza","label":"Argentina Standard Time - Mendoza"},{"value":"America/Argentina/Rio_Gallegos","label":"Argentina Standard Time - Rio Gallegos"},{"value":"America/Argentina/Salta","label":"Argentina Standard Time - Salta"},{"value":"America/Argentina/San_Juan","label":"Argentina Standard Time - San Juan"},{"value":"America/Argentina/San_Luis","label":"Argentina Standard Time - San Luis"},{"value":"America/Argentina/Tucuman","label":"Argentina Standard Time - Tucuman"},{"value":"America/Argentina/Ushuaia","label":"Argentina Standard Time - Ushuaia"},{"value":"Atlantic/Bermuda","label":"Atlantic Time - Bermuda"},{"value":"America/Glace_Bay","label":"Atlantic Time - Glace Bay"},{"value":"America/Goose_Bay","label":"Atlantic Time - Goose Bay"},{"value":"America/Halifax","label":"Atlantic Time - Halifax"},{"value":"America/Moncton","label":"Atlantic Time - Moncton"},{"value":"America/Thule","label":"Atlantic Time - Thule"},{"value":"America/Araguaina","label":"Brasilia Standard Time - Araguaina"},{"value":"America/Bahia","label":"Brasilia Standard Time - Bahia"},{"value":"America/Belem","label":"Brasilia Standard Time - Belem"},{"value":"America/Fortaleza","label":"Brasilia Standard Time - Fortaleza"},{"value":"America/Maceio","label":"Brasilia Standard Time - Maceio"},{"value":"America/Recife","label":"Brasilia Standard Time - Recife"},{"value":"America/Santarem","label":"Brasilia Standard Time - Santarem"},{"value":"America/Sao_Paulo","label":"Brasilia Standard Time - Sao Paulo"},{"value":"Atlantic/Stanley","label":"Falkland Islands Standard Time"},{"value":"America/Cayenne","label":"French Guiana Time"},{"value":"Antarctica/Palmer","label":"Palmer Time"},{"value":"America/Punta_Arenas","label":"Punta Arenas Time"},{"value":"Antarctica/Rothera","label":"Rothera Time"},{"value":"America/Paramaribo","label":"Suriname Time"},{"value":"America/Montevideo","label":"Uruguay Standard Time"},{"value":"America/St_Johns","label":"Newfoundland Time"},{"value":"America/Noronha","label":"Fernando de Noronha Standard Time"},{"value":"Atlantic/South_Georgia","label":"South Georgia Time"},{"value":"America/Miquelon","label":"St. Pierre & Miquelon Time"},{"value":"America/Nuuk","label":"West Greenland Time"},{"value":"Atlantic/Cape_Verde","label":"Cape Verde Standard Time"},{"value":"Atlantic/Azores","label":"Azores Time"},{"value":"UTC","label":"Coordinated Universal Time"},{"value":"America/Scoresbysund","label":"East Greenland Time"},{"value":"Etc/GMT","label":"Greenwich Mean Time"},{"value":"Africa/Abidjan","label":"Greenwich Mean Time - Abidjan"},{"value":"Africa/Bissau","label":"Greenwich Mean Time - Bissau"},{"value":"America/Danmarkshavn","label":"Greenwich Mean Time - Danmarkshavn"},{"value":"Africa/Monrovia","label":"Greenwich Mean Time - Monrovia"},{"value":"Atlantic/Reykjavik","label":"Greenwich Mean Time - Reykjavik"},{"value":"Africa/Sao_Tome","label":"Greenwich Mean Time - São Tomé"},{"value":"Africa/Algiers","label":"Central European Standard Time - Algiers"},{"value":"Africa/Tunis","label":"Central European Standard Time - Tunis"},{"value":"Europe/Dublin","label":"Ireland Time"},{"value":"Africa/Casablanca","label":"Morocco Time"},{"value":"Europe/London","label":"United Kingdom Time"},{"value":"Africa/Lagos","label":"West Africa Standard Time - Lagos"},{"value":"Africa/Ndjamena","label":"West Africa Standard Time - Ndjamena"},{"value":"Atlantic/Canary","label":"Western European Time - Canary"},{"value":"Atlantic/Faroe","label":"Western European Time - Faroe"},{"value":"Europe/Lisbon","label":"Western European Time - Lisbon"},{"value":"Atlantic/Madeira","label":"Western European Time - Madeira"},{"value":"Africa/El_Aaiun","label":"Western Sahara Time"},{"value":"Africa/Juba","label":"Central Africa Time - Juba"},{"value":"Africa/Khartoum","label":"Central Africa Time - Khartoum"},{"value":"Africa/Maputo","label":"Central Africa Time - Maputo"},{"value":"Africa/Windhoek","label":"Central Africa Time - Windhoek"},{"value":"Europe/Amsterdam","label":"Central European Time - Amsterdam"},{"value":"Europe/Andorra","label":"Central European Time - Andorra"},{"value":"Europe/Belgrade","label":"Central European Time - Belgrade"},{"value":"Europe/Berlin","label":"Central European Time - Berlin"},{"value":"Europe/Brussels","label":"Central European Time - Brussels"},{"value":"Europe/Budapest","label":"Central European Time - Budapest"},{"value":"Africa/Ceuta","label":"Central European Time - Ceuta"},{"value":"Europe/Copenhagen","label":"Central European Time - Copenhagen"},{"value":"Europe/Gibraltar","label":"Central European Time - Gibraltar"},{"value":"Europe/Luxembourg","label":"Central European Time - Luxembourg"},{"value":"Europe/Madrid","label":"Central European Time - Madrid"},{"value":"Europe/Malta","label":"Central European Time - Malta"},{"value":"Europe/Monaco","label":"Central European Time - Monaco"},{"value":"Europe/Oslo","label":"Central European Time - Oslo"},{"value":"Europe/Paris","label":"Central European Time - Paris"},{"value":"Europe/Prague","label":"Central European Time - Prague"},{"value":"Europe/Rome","label":"Central European Time - Rome"},{"value":"Europe/Stockholm","label":"Central European Time - Stockholm"},{"value":"Europe/Tirane","label":"Central European Time - Tirane"},{"value":"Europe/Vienna","label":"Central European Time - Vienna"},{"value":"Europe/Warsaw","label":"Central European Time - Warsaw"},{"value":"Europe/Zurich","label":"Central European Time - Zurich"},{"value":"Africa/Cairo","label":"Eastern European Standard Time - Cairo"},{"value":"Europe/Kaliningrad","label":"Eastern European Standard Time - Kaliningrad"},{"value":"Africa/Tripoli","label":"Eastern European Standard Time - Tripoli"},{"value":"Africa/Johannesburg","label":"South Africa Standard Time"},{"value":"Antarctica/Troll","label":"Troll Time"},{"value":"Asia/Baghdad","label":"Arabian Standard Time - Baghdad"},{"value":"Asia/Qatar","label":"Arabian Standard Time - Qatar"},{"value":"Asia/Riyadh","label":"Arabian Standard Time - Riyadh"},{"value":"Africa/Nairobi","label":"East Africa Time"},{"value":"Asia/Amman","label":"Eastern European Time - Amman"},{"value":"Europe/Athens","label":"Eastern European Time - Athens"},{"value":"Asia/Beirut","label":"Eastern European Time - Beirut"},{"value":"Europe/Bucharest","label":"Eastern European Time - Bucharest"},{"value":"Europe/Chisinau","label":"Eastern European Time - Chisinau"},{"value":"Asia/Damascus","label":"Eastern European Time - Damascus"},{"value":"Asia/Gaza","label":"Eastern European Time - Gaza"},{"value":"Asia/Hebron","label":"Eastern European Time - Hebron"},{"value":"Europe/Helsinki","label":"Eastern European Time - Helsinki"},{"value":"Europe/Kiev","label":"Eastern European Time - Kyiv"},{"value":"Asia/Nicosia","label":"Eastern European Time - Nicosia"},{"value":"Europe/Riga","label":"Eastern European Time - Riga"},{"value":"Europe/Sofia","label":"Eastern European Time - Sofia"},{"value":"Europe/Tallinn","label":"Eastern European Time - Tallinn"},{"value":"Europe/Uzhgorod","label":"Eastern European Time - Uzhhorod"},{"value":"Europe/Vilnius","label":"Eastern European Time - Vilnius"},{"value":"Europe/Zaporozhye","label":"Eastern European Time - Zaporozhye"},{"value":"Asia/Famagusta","label":"Famagusta Time"},{"value":"Asia/Jerusalem","label":"Israel Time"},{"value":"Europe/Kirov","label":"Kirov Time"},{"value":"Europe/Minsk","label":"Moscow Standard Time - Minsk"},{"value":"Europe/Moscow","label":"Moscow Standard Time - Moscow"},{"value":"Europe/Simferopol","label":"Moscow Standard Time - Simferopol"},{"value":"Europe/Istanbul","label":"Turkey Time"},{"value":"Europe/Volgograd","label":"Volgograd Standard Time"},{"value":"Asia/Yerevan","label":"Armenia Standard Time"},{"value":"Europe/Astrakhan","label":"Astrakhan Time"},{"value":"Asia/Baku","label":"Azerbaijan Standard Time"},{"value":"Asia/Tbilisi","label":"Georgia Standard Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Indian/Mauritius","label":"Mauritius Standard Time"},{"value":"Indian/Reunion","label":"Réunion Time"},{"value":"Europe/Samara","label":"Samara Standard Time"},{"value":"Europe/Saratov","label":"Saratov Time"},{"value":"Indian/Mahe","label":"Seychelles Time"},{"value":"Europe/Ulyanovsk","label":"Ulyanovsk Time"},{"value":"Asia/Kabul","label":"Afghanistan Time"},{"value":"Asia/Tehran","label":"Iran Time"},{"value":"Indian/Kerguelen","label":"French Southern & Antarctic Time"},{"value":"Indian/Maldives","label":"Maldives Time"},{"value":"Antarctica/Mawson","label":"Mawson Time"},{"value":"Asia/Karachi","label":"Pakistan Standard Time"},{"value":"Asia/Dushanbe","label":"Tajikistan Time"},{"value":"Asia/Ashgabat","label":"Turkmenistan Standard Time"},{"value":"Asia/Samarkand","label":"Uzbekistan Standard Time - Samarkand"},{"value":"Asia/Tashkent","label":"Uzbekistan Standard Time - Tashkent"},{"value":"Asia/Aqtau","label":"West Kazakhstan Time - Aqtau"},{"value":"Asia/Aqtobe","label":"West Kazakhstan Time - Aqtobe"},{"value":"Asia/Atyrau","label":"West Kazakhstan Time - Atyrau"},{"value":"Asia/Oral","label":"West Kazakhstan Time - Oral"},{"value":"Asia/Qyzylorda","label":"West Kazakhstan Time - Qyzylorda"},{"value":"Asia/Yekaterinburg","label":"Yekaterinburg Standard Time"},{"value":"Asia/Colombo","label":"India Standard Time - Colombo"},{"value":"Asia/Kolkata","label":"India Standard Time - Kolkata"},{"value":"Asia/Kathmandu","label":"Nepal Time"},{"value":"Asia/Dhaka","label":"Bangladesh Standard Time"},{"value":"Asia/Thimphu","label":"Bhutan Time"},{"value":"Asia/Almaty","label":"East Kazakhstan Time - Almaty"},{"value":"Asia/Qostanay","label":"East Kazakhstan Time - Kostanay"},{"value":"Indian/Chagos","label":"Indian Ocean Time"},{"value":"Asia/Bishkek","label":"Kyrgyzstan Time"},{"value":"Asia/Omsk","label":"Omsk Standard Time"},{"value":"Asia/Urumqi","label":"Urumqi Time"},{"value":"Antarctica/Vostok","label":"Vostok Time"},{"value":"Indian/Cocos","label":"Cocos Islands Time"},{"value":"Asia/Yangon","label":"Myanmar Time"},{"value":"Asia/Barnaul","label":"Barnaul Time"},{"value":"Indian/Christmas","label":"Christmas Island Time"},{"value":"Antarctica/Davis","label":"Davis Time"},{"value":"Asia/Hovd","label":"Hovd Standard Time"},{"value":"Asia/Bangkok","label":"Indochina Time - Bangkok"},{"value":"Asia/Ho_Chi_Minh","label":"Indochina Time - Ho Chi Minh City"},{"value":"Asia/Krasnoyarsk","label":"Krasnoyarsk Standard Time - Krasnoyarsk"},{"value":"Asia/Novokuznetsk","label":"Krasnoyarsk Standard Time - Novokuznetsk"},{"value":"Asia/Novosibirsk","label":"Novosibirsk Standard Time"},{"value":"Asia/Tomsk","label":"Tomsk Time"},{"value":"Asia/Jakarta","label":"Western Indonesia Time - Jakarta"},{"value":"Asia/Pontianak","label":"Western Indonesia Time - Pontianak"},{"value":"Australia/Perth","label":"Australian Western Standard Time"},{"value":"Asia/Brunei","label":"Brunei Darussalam Time"},{"value":"Asia/Makassar","label":"Central Indonesia Time"},{"value":"Asia/Macau","label":"China Standard Time - Macao"},{"value":"Asia/Shanghai","label":"China Standard Time - Shanghai"},{"value":"Asia/Hong_Kong","label":"Hong Kong Standard Time"},{"value":"Asia/Irkutsk","label":"Irkutsk Standard Time"},{"value":"Asia/Kuala_Lumpur","label":"Malaysia Time - Kuala Lumpur"},{"value":"Asia/Kuching","label":"Malaysia Time - Kuching"},{"value":"Asia/Manila","label":"Philippine Standard Time"},{"value":"Asia/Singapore","label":"Singapore Standard Time"},{"value":"Asia/Taipei","label":"Taipei Standard Time"},{"value":"Asia/Choibalsan","label":"Ulaanbaatar Standard Time - Choibalsan"},{"value":"Asia/Ulaanbaatar","label":"Ulaanbaatar Standard Time - Ulaanbaatar"},{"value":"Australia/Eucla","label":"Australian Central Western Standard Time"},{"value":"Asia/Dili","label":"East Timor Time"},{"value":"Asia/Jayapura","label":"Eastern Indonesia Time"},{"value":"Asia/Tokyo","label":"Japan Standard Time"},{"value":"Asia/Pyongyang","label":"Korean Standard Time - Pyongyang"},{"value":"Asia/Seoul","label":"Korean Standard Time - Seoul"},{"value":"Pacific/Palau","label":"Palau Time"},{"value":"Asia/Chita","label":"Yakutsk Standard Time - Chita"},{"value":"Asia/Khandyga","label":"Yakutsk Standard Time - Khandyga"},{"value":"Asia/Yakutsk","label":"Yakutsk Standard Time - Yakutsk"},{"value":"Australia/Darwin","label":"Australian Central Standard Time"},{"value":"Australia/Adelaide","label":"Central Australia Time - Adelaide"},{"value":"Australia/Broken_Hill","label":"Central Australia Time - Broken Hill"},{"value":"Australia/Brisbane","label":"Australian Eastern Standard Time - Brisbane"},{"value":"Australia/Lindeman","label":"Australian Eastern Standard Time - Lindeman"},{"value":"Pacific/Guam","label":"Chamorro Standard Time"},{"value":"Pacific/Chuuk","label":"Chuuk Time"},{"value":"Australia/Hobart","label":"Eastern Australia Time - Hobart"},{"value":"Antarctica/Macquarie","label":"Eastern Australia Time - Macquarie"},{"value":"Australia/Melbourne","label":"Eastern Australia Time - Melbourne"},{"value":"Australia/Sydney","label":"Eastern Australia Time - Sydney"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time"},{"value":"Asia/Ust-Nera","label":"Vladivostok Standard Time - Ust-Nera"},{"value":"Asia/Vladivostok","label":"Vladivostok Standard Time - Vladivostok"},{"value":"Australia/Lord_Howe","label":"Lord Howe Time"},{"value":"Pacific/Bougainville","label":"Bougainville Time"},{"value":"Antarctica/Casey","label":"Casey Time"},{"value":"Pacific/Kosrae","label":"Kosrae Time"},{"value":"Asia/Magadan","label":"Magadan Standard Time"},{"value":"Pacific/Noumea","label":"New Caledonia Standard Time"},{"value":"Pacific/Norfolk","label":"Norfolk Island Time"},{"value":"Pacific/Pohnpei","label":"Ponape Time"},{"value":"Asia/Sakhalin","label":"Sakhalin Standard Time"},{"value":"Pacific/Guadalcanal","label":"Solomon Islands Time"},{"value":"Asia/Srednekolymsk","label":"Srednekolymsk Time"},{"value":"Pacific/Efate","label":"Vanuatu Standard Time"},{"value":"Asia/Anadyr","label":"Anadyr Standard Time"},{"value":"Pacific/Fiji","label":"Fiji Time"},{"value":"Pacific/Tarawa","label":"Gilbert Islands Time"},{"value":"Pacific/Kwajalein","label":"Marshall Islands Time - Kwajalein"},{"value":"Pacific/Majuro","label":"Marshall Islands Time - Majuro"},{"value":"Pacific/Nauru","label":"Nauru Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Asia/Kamchatka","label":"Petropavlovsk-Kamchatski Standard Time"},{"value":"Pacific/Funafuti","label":"Tuvalu Time"},{"value":"Pacific/Wake","label":"Wake Island Time"},{"value":"Pacific/Wallis","label":"Wallis & Futuna Time"},{"value":"Pacific/Chatham","label":"Chatham Time"},{"value":"Pacific/Apia","label":"Apia Standard Time"},{"value":"Pacific/Fakaofo","label":"Tokelau Time"},{"value":"Pacific/Tongatapu","label":"Tonga Standard Time"},{"value":"Pacific/Kiritimati","label":"Line Islands Time"}],}
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
		
			
			'personId'?: string| undefined | null
			
			'casualName': string
			
			'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
			
			'skillId'?: string| undefined | null
			
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
			'trackingId'?: string| undefined | null
			
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
			
			'note'?: string| undefined | null
			
			'source': SpruceSchemas.Spruce.v2020_07_22.FeedItemTarget
			
			'target': SpruceSchemas.Spruce.v2020_07_22.FeedItemTarget
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[]| undefined | null
			
			'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
			
			'context'?: (Record<string, any>)| undefined | null
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




