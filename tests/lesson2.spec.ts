import {test, expect} from '@playwright/test'
import { Data } from '../helpers/changinData'

let data = new Data()


test.describe('Wiki test', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(data.baseUrl)

        const pageTitle = await page.locator('.main-top-left')
        await expect(pageTitle).toBeVisible()
        await expect(pageTitle).toContainText(data.mainPageTitle)
    })

    test('Wiki sercher test', async ({page}) => {
        await page.fill('#searchInput', data.searchText)
        await page.keyboard.press('Enter')

        const sercherPageTitle = await page.locator('#firstHeading')
        await expect(sercherPageTitle).toBeVisible()
        await expect(sercherPageTitle).toContainText(data.searchPageTitle)

        const sercherText = await page.locator('#ooui-php-1')
        await expect(sercherText).toBeVisible()
        await expect(sercherText).toHaveAttribute('value', data.searchText)
    })
    test.describe('Wiki sercher test', () => {
        test.beforeEach(async ({page}) => {
            await page.click('#ca-history')

            const historyPageTitle = await page.locator('#firstHeading')
            await expect(historyPageTitle).toBeVisible()
            await expect(historyPageTitle).toContainText(data.historyPageTitle)
        })

        test('Wiki main page return from history page', async ({page}) => {          
            await page.click('.mw-wiki-logo')
            const pageTitle = await page.locator('.main-top-left')
            await expect(pageTitle).toBeVisible()
            await expect(pageTitle).toContainText(data.mainPageTitle)
        })
    })
})