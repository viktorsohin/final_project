import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly addToFavoritesButton: Locator;
    readonly alertMessage: Locator;
    readonly cartQuantity: Locator;
    readonly navCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.getByTestId('product-name');
        this.productPrice = page.getByTestId('unit-price');
        this.addToCartButton = page.getByTestId('add-to-cart');
        this.addToFavoritesButton = page.getByTestId('add-to-favorites');
        this.alertMessage = page.locator('div[role="alert"]');
        this.cartQuantity = page.getByTestId('cart-quantity');
        this.navCart = page.getByTestId('nav-cart');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async navigateToCart() {
        await this.navCart.click();
    }
}