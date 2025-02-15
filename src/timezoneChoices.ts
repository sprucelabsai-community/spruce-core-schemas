export const timezoneChoices = [
    // UTC
    { value: 'UTC', label: 'UTC' },

    // Americas
    { value: 'Pacific/Honolulu', label: 'Hawaii Time' },
    { value: 'America/Anchorage', label: 'Alaska Time' },
    { value: 'America/Los_Angeles', label: 'Pacific Time' },
    { value: 'America/Denver', label: 'Mountain Time' },

    // No-DST Mountain
    { value: 'America/Phoenix', label: 'Phoenix Time (No DST)' },

    { value: 'America/Chicago', label: 'Central Time' },

    // No-DST Central
    { value: 'America/Guatemala', label: 'Central Standard Time (No DST)' },

    { value: 'America/New_York', label: 'Eastern Time' },

    // No-DST Eastern
    { value: 'America/Panama', label: 'Eastern Standard Time (No DST)' },

    { value: 'America/Sao_Paulo', label: 'Brasília Time' },

    // No-DST in South America
    {
        value: 'America/Argentina/Buenos_Aires',
        label: 'Argentina Time (No DST)',
    },

    // Europe
    { value: 'Europe/London', label: 'UK Time' },
    { value: 'Europe/Berlin', label: 'Central Europe Time' },
    { value: 'Europe/Athens', label: 'Eastern Europe Time' },
    { value: 'Europe/Moscow', label: 'Moscow Time' },

    // Africa
    { value: 'Africa/Lagos', label: 'West Africa Time' },
    { value: 'Africa/Cairo', label: 'Eastern Africa Time' },
    { value: 'Africa/Johannesburg', label: 'South Africa Time' },

    // Middle East
    { value: 'Asia/Dubai', label: 'Gulf Standard Time' },

    // Asia
    { value: 'Asia/Karachi', label: 'Pakistan Time' },
    { value: 'Asia/Kolkata', label: 'India Time' },
    { value: 'Asia/Shanghai', label: 'China Time' },
    { value: 'Asia/Tokyo', label: 'Japan Time' },
    { value: 'Asia/Seoul', label: 'Korea Time' },

    // Australia / Oceania
    { value: 'Australia/Perth', label: 'Western Australia Time' },
    { value: 'Australia/Adelaide', label: 'Central Australia Time' },
    { value: 'Australia/Sydney', label: 'Eastern Australia Time' },
    { value: 'Pacific/Auckland', label: 'New Zealand Time' },

    // No-DST in Oceania
    { value: 'Pacific/Port_Moresby', label: 'Papua New Guinea Time (No DST)' },
] as const
