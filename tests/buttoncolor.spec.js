import{test, expect} from '@playwright/test';
import exp from 'constants';

test('validate button background color', async ({ page }) => {
  await page.goto('http://spicejet.com/');

  // Get the computed background color
  const bgColor = await page.locator("//div[@style='flex: 0.35 1 0%; -webkit-box-flex: 0.35;']").evaluate(el =>
    window.getComputedStyle(el).getPropertyValue('background-color')
  );

  await page.locator('div:nth-child(2) > div > div > div > div > div > svg > g > circle:nth-child(2)').click();
  await page.locator('div:nth-child(2) > div > div > div > div > div > svg > circle').first().click();
  await page.locator('div:nth-child(2) > div > div > div > div > div > svg > g > circle:nth-child(2)').click();
  await page.locator('div').filter({ hasText: /^Students$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Students$/ }).first().click();
  await page.locator('div:nth-child(2) > div > div > div > div > div > svg > circle').first().click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.getByTestId('home-page-flight-cta').press('Escape');
  await page.getByTestId('home-page-flight-cta').press('Escape');


  console.log('Background color:', bgColor); // e.g., 'rgb(0, 123, 255)'

  // Assert the color
  expect(bgColor).toBe('rgba(247, 148, 29,0.5)'); // Replace with expected RGB value
});
