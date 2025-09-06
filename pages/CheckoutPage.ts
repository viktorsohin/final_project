import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly proceedToCheckoutBtn: Locator;
    readonly productQuantityElements: Locator;
    readonly productTitles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('tbody > tr');
        this.proceedToCheckoutBtn = page.getByRole('button', { name: 'Proceed To Checkout' });
        this.productQuantityElements = page.getByTestId('product-quantity');
        this.productTitles = page.getByTestId('product-title');
    }

    getCartItemByName(productName: string): Locator {
        return this.cartItems.filter({ hasText: productName });
    }

    getProductTitleByName(productName: string): Locator {
        return this.productTitles.filter({ hasText: productName });
    }
}