import { Locator, Page } from '@playwright/test';

export class FiltersFragment {
  protected page: Page;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortDropdown = page.locator('[data-test="sort"]');
  }

  async sortBy(option: 'name,asc' | 'name,desc' | 'price,asc' | 'price,desc') {
    await this.sortDropdown.selectOption(option);
  }
}
