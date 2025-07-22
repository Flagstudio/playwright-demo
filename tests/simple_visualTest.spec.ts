import { test, expect } from '@playwright/test';

test.only('Visual Regression Example', async ({ page }) => {
  await page.goto('https://example.com');

  const screenshot = await page.screenshot({
    fullPage: true,
    mask: [
      // Пример: скрыть динамические баннеры
      // page.locator('.dynamic-banner')
    ]
  });

  expect(screenshot).toMatchSnapshot('example-homepage.png', {
    threshold: 0.2,
    maxDiffPixels: 500
  });
});