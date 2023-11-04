//Hardcoded test for the RootLayout component
const { test, expect } = require('@playwright/test');

test('RootLayout renders correctly', async ({ page }) => {
  // Navigate to the page that uses RootLayout
  await page.goto('http://localhost:3000');

  // Check if the title is correct
  await expect(page).toHaveTitle('Alejandro Velasquez Resume 2023');

  // Check if the Remixicon font stylesheet is loaded
  const remixiconStylesheet = await page.locator('link[href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"]');
  await expect(remixiconStylesheet).toHaveAttribute('rel', 'stylesheet');

  // Check if the Bootstrap CSS is loaded
  const bootstrapStylesheet = await page.locator('link[href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"]');
  await expect(bootstrapStylesheet).toHaveAttribute('rel', 'stylesheet');

  // Check if the AOS Animation Library is loaded
  const aosStylesheet = await page.locator('link[href="https://unpkg.com/aos@2.3.1/dist/aos.css"]');
  await expect(aosStylesheet).toHaveAttribute('rel', 'stylesheet');

  // Add more checks for other resources as needed
});
