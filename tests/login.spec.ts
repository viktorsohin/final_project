import { test, expect } from '@playwright/test';
import { AccountPage } from '../pages/AccountPage';
import 'dotenv/config';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Successful login and account page verification', async ({ page }) => {
    const account = new AccountPage(page); 
    await page.goto('/account'); 
    await expect(page).toHaveURL(/\/account$/);
    await expect(account.title).toHaveText('My account');
    await expect(account.header.navMenu).toHaveText(process.env.USER_NAME!);
});
 