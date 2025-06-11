import{test, expect} from '@playwright/test';

test('Add to cart', async ({ page }) => {
test.setTimeout(60000)
await page.goto('https://www.amazon.in')
await page,getByplaceholder('Search Amazon.in').click()
await page.getByPlaceholder('Search Amazon.in').fill('laptop')
await page.locator('#nav-search-submit-button').click()
await page.waitForTimeout(5000)



})