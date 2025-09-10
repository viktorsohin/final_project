import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test.describe('Product Page', () => {
    let homePage: HomePage;
    let productPage: ProductPage;

    const productName = 'Combination Pliers';

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        await page.goto('/');
    });

    test('Verify user can view product details', async ({ page }) => {
        await homePage.clickOnCard(productName);

        await expect(page).toHaveURL(/.*\/product\/.*/);
        await expect(productPage.productName).toHaveText(productName);
        await expect(productPage.productPrice).toHaveText('14.15');
        await expect(productPage.addToCartButton).toBeVisible();
        await expect(productPage.addToFavoritesButton).toBeVisible();
    });
});