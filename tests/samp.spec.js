import { test, expect } from '@playwright/test';

test('flight booking from Bangalore to Delhi on MakeMyTrip', async ({ page }) => {
    // Go to MakeMyTrip website
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.makemytrip.com/');
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Close the login popup if it appears
    try {
        await page.click('xpath=//p[text()="Login or Create Account"]');
    } catch (e) {
        // Popup did not appear
    }

    // Select the "From" city
    await page.click('xpath=//label[@for="fromCity"]');
    await page.fill('input[placeholder="From"]', 'Bangalore');
    await page.click('xpath=//p[text()="Bengaluru, India"]');

    // Select the "To" city
    await page.click('xpath=//label[@for="toCity"]');
    await page.fill('input[placeholder="To"]', 'Delhi');
    await page.click('xpath=//p[text()="New Delhi, India"]');

    // Select the departure date
    await page.click('xpath=//label[@for="departure"]');
    await page.click('xpath=//div[@aria-label="Tue Jan 28 2025"]');

    // Click on the search button
    await page.click('xpath=//a[text()="Search"]');

    // Wait for the search results to load
    await page.waitForSelector('xpath=//span[text()="Flights"]');

    // Assert that search results are displayed
    const results = await page.$$('xpath=//div[contains(@class, "fli-list")]');
    expect(results.length).toBeGreaterThan(0);
});