import { Page, Locator } from '@playwright/test';

export class HeaderFragment {
    readonly page: Page;
    readonly navMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navMenu = this.page.getByTestId('nav-menu');
    }
}