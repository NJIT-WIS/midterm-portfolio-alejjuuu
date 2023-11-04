// Automated Testing with Playwright
const { test, expect } = require('@playwright/test');

// Describe Block:
test.describe('Functional Testing:', () => {
    // Test Case 1: Homepage
    test('Homepage loads correctly', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const pageTitle = await page.title();
        expect(pageTitle).not.toBe('');

        const pageContent = await page.textContent('body');
        expect(pageContent).not.toBe('');

        const imageSrcs = await page.$$eval('img', images => images.map(img => img.src));
        expect(imageSrcs.length).toBeGreaterThan(0);

        const styleSheetLinks = await page.$$eval('link[rel="stylesheet"]', links => links.map(link => link.href));
        expect(styleSheetLinks.length).toBeGreaterThan(0);

        const scriptSrcs = await page.$$eval('script', scripts => scripts.map(script => script.src));
        expect(scriptSrcs.length).toBeGreaterThan(0);
    });
    // Test Case: Navigation
    test('Page contains navigation links', async ({ page }) => {
        await page.goto('http://localhost:3000');

        // Grab all anchor elements
        const navigationLinks = await page.$$('a');

        // Check if at least one link exists
        if (navigationLinks.length === 0) {
            throw new Error('No links found on the page.');
        }

        // Ensure each link has a non-empty href attribute
        for (const link of navigationLinks) {
            const hrefValue = await link.getAttribute('href');
            if (!hrefValue) {
                throw new Error('Found a link without an href attribute.');
            }
        }

        // If the test reaches this point, all links have an href attribute
        console.log(`Found ${navigationLinks.length} links with href attributes.`);
    });




    // Test Case 3: Forms
    test('Fill and submit all forms on the page', async ({ page }) => {
        await page.goto('http://localhost:3000/contact');
        const forms = await page.$$('form');

        for (const form of forms) {
            await form.fill('input[name="name"]', 'Your Name');
            await form.fill('input[name="email"]', 'your@email.com');
            await form.fill('textarea[name="message"]', 'Your message');
            await form.evaluate(form => form.submit());
            await page.waitForSelector('.confirmation-message', { timeout: 5000 });
        }
    });

    // Test Case 4: Error Handling
    test('Error handling', async ({ page }) => {
        await page.goto('http://localhost:3000');
        // Add error handling checks here
    });

    // More tests can be added here as needed...
});

// Note: The comments at the end for various types of testing (1-20) can be
// implemented as individual tests or test.describe blocks within the same file.
