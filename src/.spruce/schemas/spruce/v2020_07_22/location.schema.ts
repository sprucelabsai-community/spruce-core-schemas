import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const locationSchema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema  = {
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

SchemaRegistry.getInstance().trackSchema(locationSchema)

export default locationSchema
