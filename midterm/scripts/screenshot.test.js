// Since you're using ES modules, you import the playwright like this:
import playwright from 'playwright';

// screenshot.js
// Remove the CommonJS require statement since you already imported playwright at the top.

async function takeScreenshot(url, path) {
  // Launch the browser
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the URL
  await page.goto(url);
  
  // Take a screenshot and save it to the given path
  await page.screenshot({ path });
  
  // Close the browser
  await browser.close();
}

async function main() {
  // Define the URLs of your projects and the desired screenshot file paths
  const projects = [
    { url: 'https://www.uniquephotography.art', path: '../public/images/photography-portfolio.jpg' },
    { url: 'https://www.dinfluenceart.com', path: '../public/images/e-commerce-web-app.jpg' },
    // Add more projects here
  ];

  // Take a screenshot for each project
  for (const project of projects) {
    await takeScreenshot(project.url, project.path);
  }
}

// Run the main function
main().catch(console.error);
