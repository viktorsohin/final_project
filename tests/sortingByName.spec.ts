import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SortLabel, SortOrder } from '../enums/labelSorting';

test.describe('Product sorting by name', () => {
    const sortOptions = [
        { label: SortLabel.AscendingByName, order: SortOrder.Ascending },
        { label: SortLabel.DescendingByName, order: SortOrder.Descending },
    ];

    sortOptions.forEach(({ label, order }) => {
        test(`Verify user can perform sorting by name (${order}): ${label}`, async ({ page }) => {
            const homePage = new HomePage(page);
            await homePage.goto();
            await homePage.sort.selectOption({ label: label });
            await homePage.sortingIsComplited.waitFor();
            const productNames = await homePage.productNames.allTextContents();
            const cleanNames = productNames.map(name => name.trim());
            const sortedNames = [...cleanNames].sort((a, b) =>
                order === SortOrder.Ascending ? a.localeCompare(b) : b.localeCompare(a)
            );

            expect(cleanNames).toEqual(sortedNames);
        });
    });
});