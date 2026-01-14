import { test, expect, Locator } from "@playwright/test";

test("XPath demo in Plawright", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // 1. Absolute Xpath

  // const logo: Locator = page.locator(
  //   "//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]"
  // );
  const logo: Locator = page.locator(
    "xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]"
  );

  await expect(logo).toBeVisible();

  //2. Relative xPath - logo
  const relativelogo: Locator = page.locator(
    "//img[@alt='Tricentis Demo Web Shop']"
  );
  await expect(relativelogo).toBeVisible();

  //3. contains()
  const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
  const productsCount: number = await products.count(); // count number of products
  console.log("No. of Computer Related Products:", productsCount);
  expect(productsCount).toBeGreaterThan(0);  // check number of products are greater than 0
});
