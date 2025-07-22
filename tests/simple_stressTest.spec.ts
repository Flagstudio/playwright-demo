import {test, expect} from '@playwright/test'

test.describe.parallel('Stress Test Example', () => {
    
    const usersCount = 20;

    for (let i = 1; i <= usersCount; i++) {
        test('Simple basic stess test ' + i, async ({page}) => {
            await page.goto('https://example.com/')
            const pageTitle = await page.locator('h1')
            await expect(pageTitle).toContainText('Example Domain')
        })
    }
})