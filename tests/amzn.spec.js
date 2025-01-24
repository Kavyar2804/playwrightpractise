// @ts-check
import {test, expect} from '@playwright/test';

test('handleframe',async({page})=>{
    test.slow()
    await page.goto('https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3')
    let parentframe = await page.frameLocator("//iframe[@class='w-full h-96']")
    let nestedframe = parentframe.locator('iframe').contentFrame()
    let muti1 = nestedframe.locator("iframe").first().contentFrame()
    let muti2 = nestedframe.locator("iframe").nth(1).contentFrame()
    let muti3 = nestedframe.locator("iframe").nth(2).contentFrame()
    let muti4 = nestedframe.locator("iframe").nth(3).contentFrame()

    //type2

    //page.frameLocator("[class='w-full h-96']").frameLocator('iframe').locator('iframe').nth().frameLocator('iframe')
    await muti1.locator("[type='email']").fill('ammu')
    await muti2.getByLabel('Password').fill('chinnu')
    await muti3.getByLabel('Confirm Password:').fill('chinnu')
    await muti4.getByRole('button', { name: 'Submit' }).click()

    
})

// await page.goto('https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3');
// await page.locator('iframe').contentFrame().locator('iframe').contentFrame().locator('iframe').first().contentFrame().getByLabel('Email:').click();
// await page.locator('iframe').contentFrame().locator('iframe').contentFrame().locator('iframe').first().contentFrame().getByLabel('Email:').fill('ammu');
// await page.locator('iframe').contentFrame().locator('iframe').contentFrame().locator('iframe').nth(1).contentFrame().getByLabel('Password:').click();
// await page.locator('iframe').contentFrame().locator('iframe').contentFrame().locator('iframe').nth(1).contentFrame().getByLabel('Password:').fill('chinnu');
// await page.locator('iframe').contentFrame().locator('iframe').contentFrame().locator('iframe').nth(2).contentFrame().getByLabel('Confirm Password:').click();
// await page.locator('iframe').contentFrame().locator('iframe').contentFrame().locator('iframe').nth(2).contentFrame().getByLabel('Confirm Password:').fill('chinnu');
// await page.locator('iframe').contentFrame().locator('iframe').contentFrame().locator('iframe').nth(3).contentFrame().getByRole('button', { name: 'Submit' }).click();