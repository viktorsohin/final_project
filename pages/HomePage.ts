import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly sort: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;
    readonly sortingIsComplited: Locator;
    readonly filteringIsComplited: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sort = this.page.getByTestId('sort');
        this.productNames = this.page.getByTestId('product-name');
        this.productPrices = this.page.getByTestId('product-price');
        this.sortingIsComplited = this.page.getByTestId('sorting_completed');
        this.filteringIsComplited = this.page.getByTestId('filter_completed')
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com');
        await this.page.waitForTimeout(1000);
    }

    async clickCombinationPliers() {
        const productLink = this.page.getByRole('heading', { name: /Combination Pliers/i });
        await productLink.click();
    }

    async clickProductByName(productName: string) {
        const productLink = this.page.getByRole('heading', { name: productName });
        await productLink.click();
    }
}