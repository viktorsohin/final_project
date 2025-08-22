import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com');
    }

    async clickCombinationPliers() {
          const productLink = this.page.getByRole('heading', { name: /Combination Pliers/i });
          await productLink.click();
    }
}
