import { test, expect, Locator } from "@playwright/test";

test("Verify Playwright Locators", async ({ page }) => {
  //home page
  /*await page.goto("https://demo.nopcommerce.com/");
  
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  
  await expect(logo).toBeVisible(); //Visual Logo
  
  await expect(page.getByText("Welcome to our store")).toBeVisible(); //Visual Text
  
  await page.getByRole("link", { name: "Register" }).click();
  */
  //Register page
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
  await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
});
