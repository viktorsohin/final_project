
import { PowerTools } from '../enums/productCategories';
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Verify user can filter products by category', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await page.getByRole('checkbox', { name: PowerTools.Sander }).check();
    await homePage.filteringIsComplited.waitFor();
    const productNames = await homePage.productNames.allTextContents();
    productNames.forEach((name) => {
        expect(name.trim()).toContain('Sander');
    });
});