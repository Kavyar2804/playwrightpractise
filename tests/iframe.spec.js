import {test, expect} from "@playwright/test"

test.skip('handle iframe',  async({page})=>{
test.slow()
await page.goto('http://the-internet.herokuapp.com/iframe')
let frametext = await page.frameLocator("[class='tox-edit-area__iframe']").locator("[class='mce-content-body mce-content-readonly']")
await frametext.click()
await frametext.fill('javascript with playwright')
await expect(frametext).toHaveText('javascript with playwright')

})

test('nested frame',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    let first = page.frameLocator("[name='frame-left']")
    await expect(first).toHaveText('LEFT')
})