import { Page, Locator } from '@playwright/test';
import { HeaderFragment } from './fragments/HeaderFragment';

export class AccountPage {
    readonly page: Page;
    readonly title: Locator;
    readonly header: HeaderFragment;

    constructor (page : Page) {
        this.page = page;
        this.title = this.page.getByTestId('page-title');
        this.header = new HeaderFragment(this.page);
    }  
}