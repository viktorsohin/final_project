import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Add product to cart and verify checkout page - POM', async ({ page }) => {
    const productName = 'Slip Joint Pliers';
    const productPrice = '9.17';
    
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.goto();
    await homePage.clickProductByName(productName);
    await expect(page).toHaveURL(/.*product/);
    await expect(productPage.productName).toHaveText(productName);
    await expect(productPage.productPrice).toContainText(productPrice);
    await productPage.addToCart();
    await expect(productPage.alertMessage).toBeVisible();
    await expect(productPage.alertMessage).toHaveText('Product added to shopping cart.');
    await expect(productPage.alertMessage).not.toBeVisible({ timeout: 8000 });
    await expect(productPage.cartQuantity).toHaveText('1');
    await productPage.navigateToCart();
    await expect(page).toHaveURL(/.*checkout/);
    await expect(checkoutPage.productQuantityElements).toHaveCount(1);
    await expect(checkoutPage.getProductTitleByName(productName)).toBeVisible();
    await expect(checkoutPage.proceedToCheckoutBtn).toBeVisible();
});