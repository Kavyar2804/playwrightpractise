import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://106.51.82.61:9007/');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('admin@admin.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin@123');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.getByRole('link', { name: ' Doctor' }).click();
  await page.getByRole('button', { name: 'Add Doctor' }).click();
  await page.locator('iframe').contentFrame().locator('body').click();
  await page.locator('iframe').contentFrame().locator('body').fill('hello');
  await page.getByRole('button', { name: 'Submit' }).click();
});