import { test, expect, Locator } from "@playwright/test";

test("Verify Playwright Locators", async ({ page }) => {
  //home page
  /*await page.goto("https://demo.nopcommerce.com/");
  
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  
  await expect(logo).toBeVisible(); //Visual Logo
  
  await expect(page.getByText("Welcome to our store")).toBeVisible(); //Visual Text
  
  await page.getByRole("link", { name: "Register" }).click();*/
  //Register page
  /*await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
  await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();

  await page.getByLabel("First name:").fill("Abhishek");
  await page.getByLabel("Last name:").fill("Kumar");
  await page.getByLabel("Email:").fill("abc@gmail.com");

  await page.getByPlaceholder("Search store").fill("Apple MacBook Pro");
*/
  /*await page.goto("http://www.automationpractice.pl/index.php");
  await expect(page.getByTitle("Log in to your customer account")).toHaveText(
    "Sign in"
  );
  await page.getByTestId("fb:like_box Facebook Social Plugin").isVisible();*/
});
