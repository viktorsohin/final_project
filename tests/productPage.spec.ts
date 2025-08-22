import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test.describe('Product Page', () => {
    let homePage: HomePage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        await page.goto('/');
    });

    test('Verify user can view product details', async ({ page }) => {
        await homePage.clickCombinationPliers();

        await expect(page).toHaveURL(/.*\/product\/.*/);
        await expect(productPage.productName).toHaveText('Combination Pliers');
        await expect(productPage.productPrice).toHaveText('14.15');
        await expect(productPage.addToCartButton).toBeVisible();
        await expect(productPage.addToFavoritesButton).toBeVisible();
    });
});
