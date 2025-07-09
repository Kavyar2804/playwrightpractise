import { test, expect } from '@playwright/test';
import fs from 'fs';

test('File Download Example', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  // Listen for the download event
  const downloadpromise = page.waitForEvent('download')
    await page.click('a[href="download/some-file.txt"]') // Change link text or href based on actual file
  const download = await downloadpromise

  // Save the file to a desired path
  //const filePath = await download.path();
  const savedPath = 'downloads/some-file.txt';

  await download.saveAs(savedPath);

  // Assert file exists
  //(fs.existsSync(savedPath)).toBeTruthy();
  expect(download.suggestedFilename()).toBe('some-file.txt')
});
