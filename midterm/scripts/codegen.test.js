import { test, expect } from '@playwright/test';

test.describe('Localhost page interactions', () => {
  test('should navigate through the site and interact with elements', async ({ page }) => {
    // Navigate to the local server
    await page.goto('http://localhost:3000/');

    // Handle popups and interact with elements on the page
    await Promise.all([
      page.waitForEvent('popup').then(page1 => page1.waitForLoadState('domcontentloaded')),
      page.getByRole('link', { name: '' }).click()
    ]);

    await Promise.all([
      page.waitForEvent('popup').then(page2 => page2.waitForLoadState('domcontentloaded')),
      page.getByRole('link', { name: '' }).click()
    ]);

    await page.getByRole('link', { name: 'P', exact: true }).click();
    await page.getByRole('link', { name: 'Alejandro Velasquez' }).click();

    await Promise.all([
      page.waitForEvent('popup').then(page3 => page3.waitForLoadState('domcontentloaded')),
      page.getByRole('link', { name: 'Projects' }).click()
    ]);

    await Promise.all([
      page.waitForEvent('popup').then(page4 => page4.waitForLoadState('domcontentloaded')),
      page.getByRole('link', { name: 'Download Resume' }).click()
    ]);

    // Interact with various links by their role and name
    const skills = ['JavaScript', 'Java', 'Node.js', 'Vue.js', 'React', 'CSS', 'SQL', 'Python', 'GitHub/Git', 'HTML5', 'PHP', 'Docker', 'Figma'];
    for (const skill of skills) {
      await page.getByRole('link', { name: skill }).click();
    }

    await page.getByText('LINUX', { exact: true }).click();

    // Interact with sections containing specific text and click their buttons
    const experiences = [
      'May 2023 - Aug 2023Bank of AmericaSoftware EngineerSelect here to see my achievements',
      'Jun 2022 - Aug 2022FiservAppOps InternClick here to see my achievements at Fiserv',
      // Add other experiences as needed
    ];

    for (const experience of experiences) {
      await page.locator('section', { hasText: experience }).getByRole('button').click();
    }

    // Final interaction with the 'Lets Talk' link
    await page.getByRole('link', { name: 'Lets Talk' }).click();
  });
});
