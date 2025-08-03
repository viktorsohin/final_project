import { test, expect } from '@playwright/test';

test('Successful login and account page verification', async ({ page }) => {
  await page.goto('/auth/login');
    await page.getByTestId('email').fill('customer@practicesoftwaretesting.com');
    await page.getByTestId('password').fill('welcome01');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(page.getByTestId('page-title')).toHaveText('My account');
    await expect( page.getByTestId('nav-menu')).toHaveText('Jane Doe');
});
 