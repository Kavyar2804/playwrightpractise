//script.js

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();

  await page.goto('https://amazon.in');
  const title = await page.title();
  console.log('Page title:', title);

  await browser.close();
})();

