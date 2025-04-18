
import tdata from "../testdata/tdata.json"
import {test,expect} from "@playwright/test"

test('Loginwithvaliddata',async({page})=>{

await page.goto(tdata.url)
await page.setViewportSize({ width: 1920, height: 1080 });
await page.locator('#username').fill(tdata.username)
await page.locator('#password').fill(tdata.password)
await page.locator('#submit').click()

})

