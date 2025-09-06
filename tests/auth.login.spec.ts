import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import 'dotenv/config';

const authFile = 'playwright/.auth/user.json';

test('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/auth/login');
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);
  await page.waitForURL('**/account');
  await page.context().storageState({ path: authFile });
});
