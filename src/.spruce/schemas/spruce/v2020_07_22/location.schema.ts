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
	                options: {choices: [{"label":"(GMT -12) Eniwetok, Kwajalein","value":"-12"},{"label":"(GMT -11) Midway Island, Samoa","value":"-11"},{"label":"(GMT -10) Hawaii","value":"-10"},{"label":"(GMT -9:30) Taiohae","value":"9:50"},{"label":"(GMT -9) Alaska","value":"9"},{"label":"(GMT -8) Pacific Time (US &amp; Canada)","value":"8"},{"label":"(GMT -7) Mountain Time (US &amp; Canada)","value":"7"},{"label":"(GMT -6) Central Time (US &amp; Canada), Mexico City","value":"6"},{"label":"(GMT -5) Eastern Time (US &amp; Canada), Bogota, Lima","value":"5"},{"label":"(GMT -4:30) Caracas","value":"4:50"},{"label":"(GMT -4) Atlantic Time (Canada), Caracas, La Paz","value":"4"},{"label":"(GMT -3:30) Newfoundland","value":"3:50"},{"label":"(GMT -3) Brazil, Buenos Aires, Georgetown","value":"3"},{"label":"(GMT -2) Mid-Atlantic","value":"2"},{"label":"(GMT -1) Azores, Cape Verde Islands","value":"1"},{"label":"(GMT) Western Europe Time, London, Lisbon, Casablanca","value":"0"},{"label":"(GMT +1) Brussels, Copenhagen, Madrid, Paris","value":"1"},{"label":"(GMT +2) Kaliningrad, South Africa","value":"2"},{"label":"(GMT +3) Baghdad, Riyadh, Moscow, St. Petersburg","value":"3"},{"label":"(GMT +3:30) Tehran","value":"3:50"},{"label":"(GMT +4) Abu Dhabi, Muscat, Baku, Tbilisi","value":"4"},{"label":"(GMT +4:30) Kabul","value":"4:50"},{"label":"(GMT +5) Ekaterinburg, Islamabad, Karachi, Tashkent","value":"5"},{"label":"(GMT +5:30) Bombay, Calcutta, Madras, New Delhi","value":"5:50"},{"label":"(GMT +5:45) Kathmandu, Pokhara","value":"5:75"},{"label":"(GMT +6) Almaty, Dhaka, Colombo","value":"6"},{"label":"(GMT +6:30) Yangon, Mandalay","value":"6:50"},{"label":"(GMT +7) Bangkok, Hanoi, Jakarta","value":"7"},{"label":"(GMT +8) Beijing, Perth, Singapore, Hong Kong","value":"8"},{"label":"(GMT +8:45) Eucla","value":"8:75"},{"label":"(GMT +9) Tokyo, Seoul, Osaka, Sapporo, Yakutsk","value":"9"},{"label":"(GMT +9:30) Adelaide, Darwin","value":"9:50"},{"label":"(GMT +10) Eastern Australia, Guam, Vladivostok","value":"+10"},{"label":"(GMT +10:30) Lord Howe Island","value":"+10:50"},{"label":"(GMT +11) Magadan, Solomon Islands, New Caledonia","value":"+11"},{"label":"(GMT +11:30) Norfolk Island","value":"+11:50"},{"label":"(GMT +12) Auckland, Wellington, Fiji, Kamchatka","value":"+12"},{"label":"(GMT +12:45) Chatham Islands","value":"+12:75"},{"label":"(GMT +13) Apia, Nukualofa","value":"+13"},{"label":"(GMT +14) Line Islands, Tokelau","value":"+14"}],}
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
