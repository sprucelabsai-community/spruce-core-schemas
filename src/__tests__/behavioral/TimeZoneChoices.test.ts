import AbstractSpruceTest, { test, assert } from '@sprucelabs/test'
import { getTimezoneOffset } from 'date-fns-tz'
import { timezoneChoices } from '../../timezoneChoices'

export default class TimeZoneChoicesTest extends AbstractSpruceTest {
    @test()
    protected static async findsOffsetForAllTimezones() {
        timezoneChoices.forEach(({ value }) => getTimezoneOffset(value))
    }

    @test()
    protected static noDupeTimezoneChoices() {
        let exists: any = []

        timezoneChoices.forEach(({ value }) => {
            if (exists[value]) {
                assert.fail(`Duplicate timezoneChoice ${value}`)
            }
            exists[value] = value
        })
    }
}
