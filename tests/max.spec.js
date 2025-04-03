const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Maximize the browser window
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Navigate to Flipkart website
    await page.goto('https://www.flipkart.com');

    // Add any additional actions here

    // Close the browser
    await browser.close();
})();