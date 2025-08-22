import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';

test('Successful login and account page verification', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/auth/login');
    await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);
    const account = new AccountPage(page); 
    await expect(page).toHaveURL(/\/account$/);
    await expect(account.title).toHaveText('My account');
    await expect(account.header.navMenu).toHaveText(process.env.USER_NAME!);
});
 