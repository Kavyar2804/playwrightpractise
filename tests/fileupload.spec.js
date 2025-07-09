import { test, expect } from '@playwright/test';
import path from 'path';

test('File Upload Example', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  // Click upload button
  await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, 'Adhar me.pdf'))

  await page.locator('//button[.="Upload Single File"]').click()

  await page.waitForTimeout(2000)

  // Assert uploaded file name is displayed
  //await expect(page.locator('#uploaded-files')).toHaveText('Adhar me.pdf');
});
