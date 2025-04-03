import test from "@playwright/test"

test("keyboard event", async({page})=>{

    await page.goto("https://www.google.com")
    await page.getByRole('combobox').click()
    await page.keyboard.type('playwright')
    await page.keyboard.press('Enter')
    await page.keyboard.press('ArrowDown')
    await page.pause();



})