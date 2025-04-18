import tdata from "../testdata/tdata2.json"
import {test,expect} from "@playwright/test"

tdata.forEach(({ username, password, url }, index) => {
  test(`Login test case #${index + 1}`, async ({ page }) => {
    await page.goto(url);
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#submit');
});
});
