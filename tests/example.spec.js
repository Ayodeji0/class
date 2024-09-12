// @ts-check
import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'

test('my testing', async ({ page }) => {
await page.goto("https://web.facebook.com/")

});
