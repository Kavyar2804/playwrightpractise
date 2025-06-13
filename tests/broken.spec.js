import {test, expect} from '@playwright/test';

test('broken', async({browser}) => {

      const context = await browser.newContext()
  let page= await context.newPage()
   // Array to collect broken links/images
  const brokenResources = [];

  // Listen to all network responses
  page.on('response', async (response) => {
    const status = response.status();
    const url = response.url();

    if (status >= 400) {
      brokenResources.push({ url, status });
    }
  });

  // Go to target page
  await page.goto('https://amazon.in', { waitUntil: 'networkidle' });

  // Extract all hrefs and srcs
  const urls = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a')).map(el => el.href);
    const images = Array.from(document.querySelectorAll('img')).map(el => el.src);
    return [...new Set([...links, ...images])]; // Remove duplicates
  });

  // Trigger fetch to each URL (to make sure they’re requested)
  for (const url of urls) {
    try {
      await page.evaluate((u) => {
        fetch(u).catch(() => {});
      }, url);
    } catch (err) {
      // Handle errors silently
    }
  }

  // Wait a bit to capture delayed responses
  await page.waitForTimeout(3000);

  // Report
  if (brokenResources.length === 0) {
    console.log('✅ No broken links or images found.');
  } else {
    console.log(`❌ Found ${brokenResources.length} broken links/images:`);
    brokenResources.forEach(item => {
      console.log(`- ${item.url} [HTTP ${item.status}]`);
    });
  }

  await browser.close();
    
});