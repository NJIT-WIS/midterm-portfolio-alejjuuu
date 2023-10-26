//Import Dependencies:
const { chromium } = require('playwright');
//Describe Block:
/*
We use Jest's describe function to group our test cases under the "Functional Testing" 
category. This is helpful for organizing and reporting test results.
*/
describe('Functional Testing:', () => {
    let browser;
    let page;

    /*
    This is a Jest lifecycle hook called beforeAll. It's executed once before any of
     the test cases within the same describe block are run. In this case, it launches
      a Chromium browser using Playwright's 
    */
   //runs before all testsßß
    beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
    });
    //runs after all tests
    afterAll(async () => {
        await browser.close();
    });

    // Test Case 1: Homepage
    test('Homepage loads correctly', async () => {
        await page.goto('https://tree-thing-94cva1n4c-firehoseai.vercel.app/');
    });
});