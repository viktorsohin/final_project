import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly addToFavoritesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.getByTestId('product-name');
        this.productPrice = page.getByTestId('unit-price');
        this.addToCartButton = page.getByTestId('add-to-cart');
        this.addToFavoritesButton = page.getByTestId('add-to-favorites');
    }
}
