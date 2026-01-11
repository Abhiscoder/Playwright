import { test, expect } from "@playwright/test";

test("Verify Page title", async ({ page }) => {
  await page.goto("http://www.automationpractice.pl/index.php");
  const title: string = await page.title();
  console.log("Title", title);
  await expect(page).toHaveTitle("My Shop");
});
